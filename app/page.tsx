import Link from "next/link";

export default function Home(){
  return <main>
    <section className="hero hero-rich">
      <div className="hero-rays" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span>✦</span> DAY STAR MINISTRIES • BASSETT, VIRGINIA</div>
          <h1>You’re not just welcome here.<br/><em>You belong here.</em></h1>
          <p className="hero-script">Shining the Light of Christ.</p>
          <p>At Day Star Ministries, we help people connect with Christ, grow together in grace, and serve our community for His glory.</p>
          <div className="actions">
            <Link className="button" href="/im-new">Plan Your Visit</Link>
            <Link className="button secondary" href="/watch">Watch Online</Link>
          </div>
        </div>
        <div className="hero-photo-card">
          <img src="/church.jpg" alt="Day Star Ministries church building"/>
          <div className="hero-photo-glow" aria-hidden="true">✦</div>
          <div className="hero-photo-caption"><strong>Come as you are.</strong><span>6387 Virginia Ave • Bassett, Virginia</span></div>
        </div>
      </div>
      <div className="container hero-info">
        <div><span>◷</span><strong>SUNDAY SERVICE</strong><small>10:00 AM</small></div>
        <div><span>⌖</span><strong>WE’RE LOCATED</strong><small>Bassett, Virginia</small></div>
        <div><span>♡</span><strong>EVERYONE IS WELCOME</strong><small>Come as you are.</small></div>
        <div><span>✦</span><strong>LOVE GOD • LOVE PEOPLE</strong><small>Connection that becomes service.</small></div>
      </div>
    </section>

    <section className="section pastor-home">
      <div className="container split-feature">
        <div className="portrait-wrap"><img src="/pastor-sammy-clean.jpg" alt="Pastor Sammy Caldwell"/></div>
        <div>
          <div className="eyebrow">A Welcome From Our Pastor</div>
          <h2>Welcome to Day Star.</h2>
          <p className="lead">Our prayer is that Day Star may be an instrument God uses to connect people to Himself, help us grow in His grace together, and serve the world for His glory.</p>
          <p className="signature">— Pastor Sammy Caldwell</p>
          <div className="actions"><Link className="button" href="/ministries">Meet Day Star</Link></div>
        </div>
      </div>
    </section>

    <section className="visual-trio container">
      <article className="visual-card sermon-card">
        <div className="visual-shade"></div><div className="visual-content"><span>WATCH & PRAY</span><h3>Stay connected beyond Sunday.</h3><p>Sunday worship and Tuesday Night Prayer Live in one place.</p><Link href="/watch">Watch Now →</Link></div>
      </article>
      <article className="visual-card ministry-card">
        <div className="visual-shade"></div><div className="visual-content"><span>OUR MINISTRIES</span><h3>Growing Together. Reaching Others.</h3><p>Find a place to connect, learn, serve, and belong.</p><Link href="/ministries">Explore Ministries →</Link></div>
      </article>
      <article className="visual-card c3-card">
        <div className="visual-shade"></div><div className="visual-content"><span>C³ PREVIEW</span><h3>Coffee • Conversation • Christ</h3><p>The Power of Connection, Multiplied.</p><Link href="/connect">Learn About C³ →</Link></div>
      </article>
    </section>

    <section className="section c3-feature">
      <div className="container c3-split">
        <div>
          <div className="eyebrow">The Power of Connection, Multiplied</div>
          <h2>Coffee • Conversation • Christ</h2>
          <p className="lead">C³ creates intentional, Christ-centered connection across generations and beyond church walls. Coffee is optional. Connection is essential.</p>
          <div className="pathway"><div><span>☕</span>Coffee</div><div><span>💬</span>Conversation</div><div><span>✝</span>Christ</div><div><span>♡</span>Community</div><div><span>∞</span>Connection</div></div>
          <div className="actions"><Link className="button" href="/connect">Explore C³</Link><Link className="button secondary" href="/stories">Share Your Story</Link></div>
        </div>
        <div className="c3-visual"><div className="c3-cup">C³</div><div className="c3-star">✦</div><p>One connection creates another.<br/>One conversation creates another.<br/>One act of service creates another.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="eyebrow">Connect • Grow • Serve</div>
        <h2>One church. Many ways to belong.</h2>
        <div className="grid feature-grid">
          <div className="feature-card feature-connect"><div className="feature-icon">✦</div><h3>Connect</h3><p>Build real relationships with Christ, with one another, and with our wider community.</p></div>
          <div className="feature-card feature-grow"><div className="feature-icon">↗</div><h3>Grow</h3><p>Grow through worship, prayer, Scripture, testimony, and conversations that matter.</p></div>
          <div className="feature-card feature-serve"><div className="feature-icon">♡</div><h3>Serve</h3><p>Discover gifts, notice needs, and turn connection into practical service and care.</p></div>
        </div>
      </div>
    </section>

    <section className="section outreach-home alt">
      <div className="container">
        <div className="eyebrow">Outreach in Action</div>
        <h2>See a need. Make a connection. Join a mission.</h2>
        <div className="grid">
          <Link className="image-card care-card" href="/community-care"><div><span>COMMUNITY CARE</span><h3>Closet & Pantry</h3><p>Take what you need. Give what you can. No cost.</p><strong>Explore Community Care →</strong></div></Link>
          <Link className="image-card skills-card" href="/skills-service"><div><span>SKILLS & SERVICE</span><h3>Gifts Become Service</h3><p>Learn. Practice. Prove. Serve. Earn.</p><strong>Explore Skills & Service →</strong></div></Link>
          <Link className="image-card stories-card" href="/stories"><div><span>DAY STAR STORIES</span><h3>Real people. Real stories. A living God.</h3><p>Faith and impact stories shared with care and permission.</p><strong>Explore Day Star Stories →</strong></div></Link>
        </div>
      </div>
    </section>

    <section className="closing-light"><div className="container"><span>✦</span><blockquote>“Arise, shine, for your light has come.”</blockquote><small>ISAIAH 60:1</small></div></section>
  </main>
}