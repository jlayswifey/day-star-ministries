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

        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="nav-cta" href="/im-new">Plan Your Visit</Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open menu"><span></span><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {site.nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link className="mobile-visit" href="/im-new">Plan Your Visit</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}