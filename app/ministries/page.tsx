import Link from "next/link";
export default function Ministries(){return <main>
<section className="page-hero page-hero-ministries"><div className="container"><div className="eyebrow light">Ministries</div><h1>Find Your Place.</h1><p>Worship. Prayer. Outreach. Service. Connection. Day Star is building pathways where people can belong, grow, and use what they carry.</p></div></section>
<section className="section"><div className="container"><div className="eyebrow">Current & Growing</div><h2>Ministry that moves outward.</h2><div className="grid">
<div className="image-card outreach-ministry"><div><span>OUTREACH MINISTRY</span><h3>Connection that becomes action.</h3><p>C³, Community Care, service projects, partnerships, stories, and local connection.</p><Link href="/connect">Explore Outreach →</Link></div></div>
<div className="image-card prayer-ministry"><div><span>PRAYER</span><h3>Prayer throughout the week.</h3><p>Submit a request or join Tuesday Night Prayer Live.</p><Link href="/prayer">Prayer →</Link></div></div>
<div className="image-card worship-ministry"><div><span>WORSHIP & WORD</span><h3>Gather. Worship. Grow.</h3><p>Sunday services, Bible study, and the growing media archive.</p><Link href="/watch">Watch →</Link></div></div>
</div></div></section>
<section className="section alt"><div className="container"><div className="cta-band"><div><span>MINISTRY PAGES ARE GROWING</span><h3>More ministry areas will plug into this same system as details are confirmed.</h3></div><Link className="button" href="/events">See What’s Happening</Link></div></div></section>
</main>}