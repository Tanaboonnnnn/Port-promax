import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { PerformanceChart } from "./components/PerformanceChart";
import {
  benchmarkPoints,
  holdings,
  nextFocus,
  portfolioSnapshot,
  quarterlyStatus,
  recentDecisions,
  watchlist,
} from "./data/portfolio";

function App() {
  const [selectedTicker, setSelectedTicker] = useState("GOOGL");
  const [view, setView] = useState<"dashboard" | "ledger">("dashboard");

  const selectedHolding = useMemo(
    () => holdings.find((holding) => holding.ticker === selectedTicker) ?? holdings[0],
    [selectedTicker],
  );

  const investedWeight = holdings
    .filter((holding) => holding.ticker !== "USD")
    .reduce((sum, holding) => sum + holding.weight, 0);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="kicker">Blind paper portfolio</p>
          <h1>{portfolioSnapshot.name}</h1>
          <p>{portfolioSnapshot.mandate}</p>
        </div>
        <dl className="account-strip" aria-label="Portfolio account facts">
          <div>
            <dt>As of</dt>
            <dd>{portfolioSnapshot.asOf}</dd>
          </div>
          <div>
            <dt>NAV</dt>
            <dd>${portfolioSnapshot.latestValue.toLocaleString()}</dd>
          </div>
          <div>
            <dt>Cash</dt>
            <dd>{portfolioSnapshot.cashWeight}%</dd>
          </div>
          <div>
            <dt>Invested</dt>
            <dd>{investedWeight}%</dd>
          </div>
        </dl>
      </header>

      <nav className="tabs" aria-label="Dashboard views">
        <button className={view === "dashboard" ? "active" : ""} onClick={() => setView("dashboard")}>
          Dashboard
        </button>
        <button className={view === "ledger" ? "active" : ""} onClick={() => setView("ledger")}>
          Ledger
        </button>
      </nav>

      <section className="snapshot-grid" aria-label="Portfolio snapshot">
        <div>
          <span className="label">Starting capital</span>
          <strong>${portfolioSnapshot.startingCapital.toLocaleString()}</strong>
        </div>
        <div>
          <span className="label">Since inception</span>
          <strong>{portfolioSnapshot.inceptionReturn.toFixed(2)}%</strong>
        </div>
        <div>
          <span className="label">Process quality</span>
          <strong>{portfolioSnapshot.processQuality}</strong>
        </div>
        <div>
          <span className="label">Outcome quality</span>
          <strong>{portfolioSnapshot.outcomeQuality}</strong>
        </div>
      </section>

      <div className="workspace">
        <div className="primary-column">
          {view === "dashboard" ? (
            <>
              <PerformanceChart points={benchmarkPoints} />
              <section className="holdings-panel" aria-labelledby="holdings-title">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Brokerage view</p>
                    <h2 id="holdings-title">Current holdings</h2>
                  </div>
                  <span className="subtle">Click a row to inspect the thesis.</span>
                </div>
                <div className="holdings-table">
                  <div className="holding-row holding-row--head">
                    <span>Company</span>
                    <span>Ticker</span>
                    <span>Weight</span>
                    <span>Status</span>
                    <span>Confidence</span>
                    <span>Action</span>
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
                      <span>{holding.status}</span>
                      <span>{holding.confidence}</span>
                      <span>{holding.action}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="two-column">
                <Panel title="Recent decisions" eyebrow="Decision log">
                  <div className="decision-list">
                    {recentDecisions.map((decision) => (
                      <article key={`${decision.date}-${decision.subject}`}>
                        <div>
                          <time>{decision.date}</time>
                          <strong>{decision.subject}</strong>
                        </div>
                        <p>{decision.reason}</p>
                        <span>{decision.action} / source quality: {decision.sourceQuality}</span>
                      </article>
                    ))}
                  </div>
                </Panel>

                <Panel title="Watchlist" eyebrow="Do nothing queue">
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
              <p className="eyebrow">Portfolio ledger</p>
              <h2 id="ledger-title">Thesis inventory</h2>
              {holdings.map((holding) => (
                <article key={holding.ticker}>
                  <div>
                    <strong>{holding.company}</strong>
                    <span>{holding.ticker} / {holding.weight.toFixed(1)}% / {holding.status}</span>
                  </div>
                  <p>{holding.thesis}</p>
                </article>
              ))}
            </section>
          )}
        </div>

        <aside className="inspector" aria-labelledby="inspector-title">
          <p className="eyebrow">Thesis inspector</p>
          <h2 id="inspector-title">{selectedHolding.company}</h2>
          <div className="inspector-meta">
            <span>{selectedHolding.ticker}</span>
            <span>{selectedHolding.status}</span>
            <span>{selectedHolding.confidence}</span>
          </div>
          <section>
            <h3>Current thesis</h3>
            <p>{selectedHolding.thesis}</p>
          </section>
          <section>
            <h3>Kill condition</h3>
            <p>{selectedHolding.killCondition}</p>
          </section>
          <section>
            <h3>Main assumptions</h3>
            <ul>
              {selectedHolding.assumptions.map((assumption) => (
                <li key={assumption}>{assumption}</li>
              ))}
            </ul>
          </section>
          <section className="quarterly">
            <h3>Quarterly status</h3>
            {quarterlyStatus.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </section>
          <section>
            <h3>Next focus</h3>
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
