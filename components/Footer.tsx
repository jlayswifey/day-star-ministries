import Link from "next/link";
export function Footer(){
  return <footer className="footer"><div className="container footer-grid">
    <div><strong>Day Star Ministries</strong><p>Connect • Grow • Serve</p></div>
    <div><strong>Quick Links</strong><p><Link href="/watch">Watch</Link> · <Link href="/prayer">Prayer</Link> · <Link href="/stories">Stories</Link></p></div>
    <div><strong>Outreach</strong><p><Link href="/connect">C3: Coffee • Conversation • Christ</Link></p></div>
  </div></footer>
}
