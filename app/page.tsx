import Link from "next/link";
import { mediaArchive } from "@/data/media";
import { MediaCard } from "@/components/MediaCard";
import { futureModules } from "@/data/future";
export default function Home(){return <main>
<section className="hero"><div className="container"><div className="eyebrow">Day Star Ministries</div><h1>Connect. Grow. Serve.</h1><p>A welcoming place to worship Christ, build meaningful relationships, pray together, and serve our community.</p><div className="actions"><Link className="button" href="/im-new">Plan Your Visit</Link><Link className="button secondary" href="/watch">Watch Online</Link></div></div></section>
<section className="section"><div className="container"><div className="eyebrow">C3</div><h2>Coffee • Conversation • Christ</h2><p><strong>C³: The Power of Connection, Multiplied.</strong> Coffee starts it. Conversation opens it. Christ centers it. Community multiplies it. Connection carries it farther.</p><div className="actions"><Link className="button" href="/connect">Explore C3</Link><Link className="button secondary" href="/stories">Share Your Story</Link></div></div></section>
<section className="section alt"><div className="container"><h2>Watch & Pray With Us</h2><div className="grid two">{mediaArchive.slice(0,2).map(i=><MediaCard key={i.slug} item={i}/>)}</div><div className="actions"><Link className="button" href="/watch">Open Media Archive</Link></div></div></section>
<section className="section"><div className="container"><h2>Future-Ready Architecture</h2><p>These modules are intentionally parked in the site structure now so they can be activated later without redesigning the whole website.</p><div className="grid two">{futureModules.map(m=><div className="placeholder" key={m.title}><div className="pill">{m.status}</div><h3>{m.title}</h3><p>{m.description}</p>{m.href!=="#"&&<Link href={m.href}>Open placeholder →</Link>}</div>)}</div></div></section>
</main>}
