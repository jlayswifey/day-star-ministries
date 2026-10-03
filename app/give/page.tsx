import { site } from "@/lib/site";

export default function Give(){
  return <main>
    <section className="page-hero page-hero-give">
      <div className="container">
        <div className="eyebrow light">Give</div>
        <h1>Support the Work.</h1>
        <p>Generosity helps ministry move, but giving should be clear, trusted, and handled through the church’s approved process.</p>
      </div>
    </section>
    <section className="section">
      <div className="container give-layout">
        <div>
          <div className="eyebrow">Giving at Day Star</div>
          <h2>Simple. Responsible. Church-approved.</h2>
          <p className="lead">Online giving is intentionally not activated until Day Star confirms its approved provider and financial process. This protects the church and every person who gives.</p>
          <div className="grid two">
            <div className="card"><h3>Give In Person</h3><p>For current giving options during services or church activities, speak with Day Star leadership.</p></div>
            <div className="card"><h3>Ask About Giving</h3><p>Call the church for the current approved method rather than using an unverified online payment link.</p><a className="text-link" href={site.phoneHref}>Call {site.phoneDisplay} →</a></div>
          </div>
        </div>
        <aside className="give-trust-card"><span>✦</span><h3>No unofficial payment links.</h3><p>When an approved online giving provider is confirmed, it can be added here without rebuilding the site.</p></aside>
      </div>
    </section>
  </main>
}