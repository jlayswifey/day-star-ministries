import Link from "next/link";
import { mediaArchive } from "@/data/media";
import { MediaCard } from "@/components/MediaCard";
export default function Watch(){
 const sunday=mediaArchive.filter(x=>x.kind==="Sunday Service");
 const prayer=mediaArchive.filter(x=>x.kind==="Tuesday Prayer Live");
 return <main>
 <section className="page-hero page-hero-watch"><div className="container"><div className="eyebrow light">Watch & Pray</div><h1>Stay Connected Beyond Sunday.</h1><p>Sunday worship and Tuesday Night Prayer Live—organized so a missed moment can still become a connection later.</p></div></section>
 <section className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Sunday Worship</div><h2>Latest Services</h2></div><Link href="/prayer" className="text-link">Request Prayer →</Link></div><div className="grid two">{sunday.map(i=><MediaCard key={i.slug} item={i}/>)}</div></div></section>
 <section className="section alt"><div className="container"><div className="eyebrow">Tuesday Night Prayer Live</div><h2>Pray With Us.</h2><p className="lead">Pastor Sammy’s Tuesday prayer gathering belongs here alongside the Sunday archive, making prayer part of the same digital front door.</p><div className="grid two">{prayer.map(i=><MediaCard key={i.slug} item={i}/>)}</div></div></section>
 </main>
}