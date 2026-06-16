import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { PerformanceChart } from "./components/PerformanceChart";
import { getPortfolioContent, languageLabels, uiCopy } from "./i18n";
import type { Locale } from "./i18n";

function App() {
  const [selectedTicker, setSelectedTicker] = useState("GOOGL");
  const [view, setView] = useState<"dashboard" | "ledger">("dashboard");
  const [language, setLanguage] = useState<Locale>("en");

  const copy = uiCopy[language];
  const {
    benchmarkPoints,
    holdings,
    nextFocus,
    portfolioSnapshot,
    quarterlyStatus,
    recentDecisions,
    watchlist,
  } = useMemo(() => getPortfolioContent(language), [language]);

  const selectedHolding = useMemo(
    () => holdings.find((holding) => holding.ticker === selectedTicker) ?? holdings[0],
    [holdings, selectedTicker],
  );

  const investedWeight = holdings
    .filter((holding) => holding.ticker !== "USD")
    .reduce((sum, holding) => sum + holding.weight, 0);

  return (
    <main className="app-shell" lang={language === "th" ? "th" : "en"}>
      <header className="topbar">
        <div>
          <p className="kicker">{copy.kicker}</p>
          <h1>{portfolioSnapshot.name}</h1>
          <p>{portfolioSnapshot.mandate}</p>
        </div>
        <div className="topbar-actions">
          <div className="language-switch" aria-label={copy.languageToggleLabel}>
            <span>{copy.languageToggleHint}</span>
            <div className="language-toggle">
              {(["en", "th"] as const).map((locale) => (
                <button
                  key={locale}
                  className={language === locale ? "active" : ""}
                  type="button"
                  aria-pressed={language === locale}
                  onClick={() => setLanguage(locale)}
                >
                  {languageLabels[locale].short}
                </button>
              ))}
            </div>
          </div>
          <dl className="account-strip" aria-label={copy.accountFactsAria}>
            <div>
              <dt>{copy.asOf}</dt>
              <dd>{portfolioSnapshot.asOf}</dd>
            </div>
            <div>
              <dt>{copy.nav}</dt>
              <dd>${portfolioSnapshot.latestValue.toLocaleString()}</dd>
            </div>
            <div>
              <dt>{copy.cash}</dt>
              <dd>{portfolioSnapshot.cashWeight}%</dd>
            </div>
            <div>
              <dt>{copy.invested}</dt>
              <dd>{investedWeight}%</dd>
            </div>
          </dl>
        </div>
      </header>

      <nav className="tabs" aria-label={copy.navAria}>
        <button className={view === "dashboard" ? "active" : ""} onClick={() => setView("dashboard")}>
          {copy.dashboard}
        </button>
        <button className={view === "ledger" ? "active" : ""} onClick={() => setView("ledger")}>
          {copy.ledger}
        </button>
      </nav>

      <section className="snapshot-grid" aria-label={copy.snapshotAria}>
        <div>
          <span className="label">{copy.startingCapital}</span>
          <strong>${portfolioSnapshot.startingCapital.toLocaleString()}</strong>
        </div>
        <div>
          <span className="label">{copy.sinceInception}</span>
          <strong>{portfolioSnapshot.inceptionReturn.toFixed(2)}%</strong>
        </div>
        <div>
          <span className="label">{copy.processQuality}</span>
          <strong>{portfolioSnapshot.processQuality}</strong>
        </div>
        <div>
          <span className="label">{copy.outcomeQuality}</span>
          <strong>{portfolioSnapshot.outcomeQuality}</strong>
        </div>
      </section>

      <div className="workspace">
        <div className="primary-column">
          {view === "dashboard" ? (
            <>
              <PerformanceChart points={benchmarkPoints} copy={copy.chart} locale={language} />
              <section className="holdings-panel" aria-labelledby="holdings-title">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">{copy.brokerageEyebrow}</p>
                    <h2 id="holdings-title">{copy.currentHoldings}</h2>
                  </div>
                  <span className="subtle">{copy.holdingsHint}</span>
                </div>
                <div className="holdings-table">
                  <div className="holding-row holding-row--head">
                    <span>{copy.company}</span>
                    <span>{copy.ticker}</span>
                    <span>{copy.weight}</span>
                    <span>{copy.status}</span>
                    <span>{copy.confidence}</span>
                    <span>{copy.action}</span>
                  </div>
                  {holdings.map((holding) => (
                    <button
                      className={`holding-row ${selectedTicker === holding.ticker ? "selected" : ""}`}
                      key={holding.ticker}
                      onClick={() => setSelectedTicker(holding.ticker)}
                    >
                      <span>{holding.company}</span>
                      <span>{holding.ticker}</span>
                      <span>{holding.weight.toFixed(1)}%</span>
                      <span>{copy.statuses[holding.status]}</span>
                      <span>{copy.confidenceLevels[holding.confidence]}</span>
                      <span>{copy.actions[holding.action]}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="two-column">
                <Panel title={copy.recentDecisions} eyebrow={copy.decisionLog}>
                  <div className="decision-list">
                    {recentDecisions.map((decision) => (
                      <article key={`${decision.date}-${decision.subject}`}>
                        <div>
                          <time>{decision.date}</time>
                          <strong>{decision.subject}</strong>
                        </div>
                        <p>{decision.reason}</p>
                        <span>
                          {copy.actions[decision.action]} / {copy.sourceQuality}: {copy.sourceQualityLevels[decision.sourceQuality]}
                        </span>
                      </article>
                    ))}
                  </div>
                </Panel>

                <Panel title={copy.watchlist} eyebrow={copy.watchlistEyebrow}>
                  <div className="watchlist">
                    {watchlist.map((item) => (
                      <article key={item.ticker}>
                        <div>
                          <strong>{item.company}</strong>
                          <span>{item.ticker}</span>
                        </div>
                        <p>{item.whyInteresting}</p>
                        <small>{item.whyNotYet}</small>
                      </article>
                    ))}
                  </div>
                </Panel>
              </section>
            </>
          ) : (
            <section className="ledger-panel" aria-labelledby="ledger-title">
              <p className="eyebrow">{copy.ledgerEyebrow}</p>
              <h2 id="ledger-title">{copy.thesisInventory}</h2>
              {holdings.map((holding) => (
                <article key={holding.ticker}>
                  <div>
                    <strong>{holding.company}</strong>
                    <span>
                      {holding.ticker} / {holding.weight.toFixed(1)}% / {copy.statuses[holding.status]}
                    </span>
                  </div>
                  <p>{holding.thesis}</p>
                </article>
              ))}
            </section>
          )}
        </div>

        <aside className="inspector" aria-labelledby="inspector-title">
          <p className="eyebrow">{copy.inspectorEyebrow}</p>
          <h2 id="inspector-title">{selectedHolding.company}</h2>
          <div className="inspector-meta">
            <span>{selectedHolding.ticker}</span>
            <span>{copy.statuses[selectedHolding.status]}</span>
            <span>{copy.confidenceLevels[selectedHolding.confidence]}</span>
          </div>
          <section>
            <h3>{copy.currentThesis}</h3>
            <p>{selectedHolding.thesis}</p>
          </section>
          <section>
            <h3>{copy.killCondition}</h3>
            <p>{selectedHolding.killCondition}</p>
          </section>
          <section>
            <h3>{copy.mainAssumptions}</h3>
            <ul>
              {selectedHolding.assumptions.map((assumption) => (
                <li key={assumption}>{assumption}</li>
              ))}
            </ul>
          </section>
          <section className="quarterly">
            <h3>{copy.quarterlyStatus}</h3>
            {quarterlyStatus.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </section>
          <section>
            <h3>{copy.nextFocus}</h3>
            <ol>
              {nextFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </main>
  );
}

function Panel({ children, eyebrow, title }: { children: ReactNode; eyebrow: string; title: string }) {
  return (
    <section className="support-panel">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default App;
