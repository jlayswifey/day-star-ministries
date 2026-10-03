import Link from "next/link";
export default function Events(){return <main>
<section className="page-hero page-hero-events"><div className="container"><div className="eyebrow light">Events & Opportunities</div><h1>What’s Happening at Day Star.</h1><p>Church gatherings, regional opportunities, youth events, outreach projects, and special ministry moments—all designed to live in one place.</p></div></section>
<section className="section"><div className="container"><div className="event-filter"><span>Day Star</span><span>Youth</span><span>Men</span><span>Women</span><span>Leadership</span><span>Worship</span><span>Outreach</span><span>Regional</span><span>International</span></div><div className="grid">
<div className="event-card featured"><span>WEEKLY</span><h3>Sunday Worship</h3><p>Gather with us each Sunday morning at 10:00 AM.</p><Link className="text-link" href="/im-new">Plan Your Visit →</Link></div>
<div className="event-card"><span>WEEKLY</span><h3>Tuesday Night Prayer</h3><p>Stay connected with Tuesday prayer updates and recordings through the Watch & Prayer area as verified links are added.</p><Link className="text-link" href="/watch">Watch & Pray →</Link></div>
<div className="event-card"><span>OUTREACH</span><h3>C³ Connections</h3><p>Coffee • Conversation • Christ pilot connections and outreach opportunities will appear here as they launch.</p><Link className="text-link" href="/connect">Explore C³ →</Link></div>
</div></div></section>
</main>
}