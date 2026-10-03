import Link from "next/link";
export function Footer(){
  return <footer className="footer">
    <div className="footer-glow" aria-hidden="true">✦</div>
    <div className="container footer-grid">
      <div><strong className="footer-title">Day Star Ministries</strong><p>Shining the light of Christ through worship, connection, service, and community.</p><p>6387 Virginia Ave<br/>Bassett, VA 24055</p></div>
      <div><strong>Quick Links</strong><p><Link href="/im-new">I’m New</Link><br/><Link href="/watch">Watch</Link><br/><Link href="/prayer">Prayer</Link><br/><Link href="/stories">Stories</Link></p></div>
      <div><strong>Outreach</strong><p><Link href="/connect">C³: Coffee • Conversation • Christ</Link><br/><Link href="/community-care">Community Care</Link><br/><Link href="/skills-service">Skills & Service</Link><br/><Link href="/across-borders">Across Borders</Link></p></div>
    </div>
    <div className="container footer-bottom">Connect • Grow • Serve <span>✦</span> The Power of Connection, Multiplied.</div>
  </footer>
}