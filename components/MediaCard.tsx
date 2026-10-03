import { MediaItem } from "@/data/media";

export function MediaCard({item}:{item:MediaItem}){
  const hasLink = Boolean(item.facebookUrl && item.facebookUrl !== "#");
  return <article className="card media-card">
    <div className="pill">{item.kind}</div>
    <h3>{item.title}</h3>
    <p className="muted">{new Date(item.date+"T12:00:00").toLocaleDateString("en-US", {year:"numeric",month:"long",day:"numeric"})}{item.speaker ? ` • ${item.speaker}` : ""}</p>
    <p>{item.summary}</p>
    <div className="tag-row">{item.tags?.map(t => <span key={t} className="tag">{t}</span>)}</div>
    {hasLink
      ? <a className="button secondary" href={item.facebookUrl} target="_blank" rel="noreferrer">Watch Recording</a>
      : <span className="archive-note">Recording link coming soon</span>}
  </article>
}