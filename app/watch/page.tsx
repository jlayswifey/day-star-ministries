import { mediaArchive } from "@/data/media";
import { MediaCard } from "@/components/MediaCard";
export default function Watch(){
 const sunday=mediaArchive.filter(x=>x.kind==="Sunday Service");
 const prayer=mediaArchive.filter(x=>x.kind==="Tuesday Prayer Live");
 return <main><section className="hero"><div className="container"><div className="eyebrow">Media Archive</div><h1>Watch. Pray. Revisit.</h1><p>Sunday services and Tuesday night Facebook Live prayer meetings, organized in one accessible archive.</p></div></section>
 <section className="section"><div className="container"><h2>Sunday Services</h2><div className="grid two">{sunday.map(i=><MediaCard key={i.slug} item={i}/>)}</div></div></section>
 <section className="section alt"><div className="container"><h2>Tuesday Night Prayer Live</h2><div className="grid two">{prayer.map(i=><MediaCard key={i.slug} item={i}/>)}</div></div></section>
 <section className="section"><div className="container"><div className="placeholder"><h3>Archive upgrades already parked</h3><p>Future filters can include year, series, speaker, Scripture, topic, prayer theme, testimony mentions, transcripts, and downloadable notes.</p></div></div></section></main>
}
