import { siteContent } from "@/content/site";
import { getLatestEpisode } from "@/lib/podcast-feed";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default async function Home() {
  const latestEpisode = await getLatestEpisode();
  const { song, book } = siteContent;

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav shell" aria-label="Navigazione principale">
          <a className="brand" href="#top" aria-label="Prima di Dormire, home">
            <span className="brand-mark" aria-hidden="true">☾</span>
            <span>{siteContent.name}</span>
          </a>
          <a className="nav-link" href="#ascolta">Ascolta</a>
        </nav>

        <div className="hero-glow" aria-hidden="true" />
        <div className="stars" aria-hidden="true">
          <span>✦</span><span>·</span><span>✧</span><span>·</span><span>✦</span>
        </div>

        <div className="hero-content shell" id="top">
          <p className="eyebrow">{siteContent.eyebrow}</p>
          <h1 id="hero-title">{siteContent.title}</h1>
          <p className="hero-copy">{siteContent.intro}</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={latestEpisode.href}
              target="_blank"
              rel="noreferrer"
            >
              {siteContent.primaryCta.label} <Arrow />
            </a>
            <a className="button button-quiet" href={siteContent.secondaryCta.href}>
              {siteContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="moon-scene" aria-hidden="true">
          <div className="moon" />
          <div className="hill hill-back" />
          <div className="hill hill-front" />
          <div className="storybook-house">
            <span className="house-chimney" />
            <span className="house-roof" />
            <span className="house-body">
              <span className="window">
                <span className="window-light" />
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="section shell" id="ascolta" aria-labelledby="listen-title">
        <header className="section-heading">
          <p className="eyebrow">Ascolta, leggi, continua il viaggio</p>
          <h2 id="listen-title">La stessa cura, in forme diverse.</h2>
        </header>

        <div className="feature-grid">
          <article className="card card-featured" id="podcast">
            <div className="card-art card-art-podcast" aria-hidden="true">
              <span className="kite kite-one" />
              <span className="kite kite-two" />
              <span className="wind-line wind-one" />
              <span className="wind-line wind-two" />
            </div>
            <div className="card-body">
              <p className="card-kicker">{latestEpisode.kicker}</p>
              <h3>{latestEpisode.title}</h3>
              <p>{latestEpisode.description}</p>
              <div className="card-footer">
                <span>{latestEpisode.duration}</span>
                <a
                  href={latestEpisode.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ascolta l&apos;episodio <Arrow />
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="card-icon" aria-hidden="true">♫</div>
            <p className="card-kicker">{song.kicker}</p>
            <h3>{song.title}</h3>
            <p>{song.description}</p>
            <a
              className="text-link"
              href={song.href}
              target="_blank"
              rel="noreferrer"
            >
              Ascolta la canzone <Arrow />
            </a>
          </article>

          <article className="card">
            <div className="card-icon" aria-hidden="true">▤</div>
            <p className="card-kicker">{book.kicker}</p>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <a
              className="text-link"
              href={book.href}
              target="_blank"
              rel="noreferrer"
            >
              Scopri il libro <Arrow />
            </a>
          </article>
        </div>
      </section>

      <section className="story-section" id="storia">
        <div className="shell story-layout">
          <div>
            <p className="eyebrow">Perché nasce</p>
            <h2>Per esserci, anche quando si è lontani.</h2>
          </div>
          <div className="story-copy">
            <p>
              <strong>Prima di Dormire</strong> nasce dal desiderio di trasformare pochi minuti della sera in un momento vero di presenza.
            </p>
            <p>
              Le storie parlano di lontananza, amicizia, paure, attese, ritorni e crescita. Ai bambini, con parole semplici. Agli adulti, senza fare troppo rumore.
            </p>
          </div>
        </div>
      </section>

      <section className="closing shell" aria-labelledby="closing-title">
        <div className="closing-card">
          <span className="closing-moon" aria-hidden="true">☾</span>
          <p className="eyebrow">Un nuovo racconto ogni settimana</p>
          <h2 id="closing-title">Questa sera, lasciamo entrare una storia.</h2>
          <a
            className="button button-primary"
            href={latestEpisode.href}
            target="_blank"
            rel="noreferrer"
          >
            Ascolta Prima di Dormire <Arrow />
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} Prima di Dormire</p>
        <p>Un progetto di Paolo Quadrani</p>
      </footer>
    </main>
  );
}
