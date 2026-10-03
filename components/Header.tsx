import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand brand-lockup">
          <span className="starburst" aria-hidden="true">✦</span>
          <span className="brand-words"><strong><span>DAY</span> <em>STAR</em></strong><b>MINISTRIES</b><small>{site.tagline}</small></span>
        </Link>
        <nav>
          {site.nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="nav-cta" href="/im-new">Plan Your Visit</Link>
        </nav>
      </div>
    </header>
  );
}