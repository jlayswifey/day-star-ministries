import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <span className="star">✦</span>
          <span><strong>{site.name}</strong><small>{site.tagline}</small></span>
        </Link>
        <nav>
          {site.nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
