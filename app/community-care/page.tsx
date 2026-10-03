import Link from "next/link";
import { site } from "@/lib/site";

export default function CommunityCare(){
  return <main>
    <section className="page-hero page-hero-care">
      <div className="container">
        <div className="eyebrow light">C³ Community Care</div>
        <h1>Take What You Need.<br/>Give What You Can.</h1>
        <p>Practical help offered with dignity, kindness, and connection. No cost. No shame. No complicated doorway.</p>
        <div className="actions">
          <a className="button" href="#request-help">Request Help</a>
          <a className="button secondary" href="#give-help">Donate or Volunteer</a>
        </div>
      </div>
    </section>

    <section className="care-manifesto">
      <div className="container">
        <span>✦</span>
        <strong>SEE A NEED • MAKE A CONNECTION • JOIN A MISSION</strong>
        <p>Community Care is not only about items on shelves. It is about noticing people, discovering needs and gifts, and helping the next good action become easier.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="eyebrow">Closet & Pantry</div>
        <h2>Help that feels human.</h2>
        <p className="lead">The Community Care Hub is being developed as a practical, dignity-first resource for clothing, pantry support, essential items, and connection to people who may be able to help with the next need.</p>

        <div className="care-actions">
          <article className="care-action-card help">
            <div className="care-icon">♡</div>
            <span>I NEED</span>
            <h3>Request Help</h3>
            <p>Tell us what would help right now. A request can be simple, private, and focused on the immediate need.</p>
            <a href="#request-help">Start a request →</a>
          </article>
          <article className="care-action-card give">
            <div className="care-icon">↗</div>
            <span>I HAVE</span>
            <h3>Give Something Useful</h3>
            <p>Clothing, pantry items, household basics, time, tools, transportation, skills, or another resource may become someone else’s next step.</p>
            <a href="#give-help">See ways to give →</a>
          </article>
          <article className="care-action-card serve">
            <div className="care-icon">✦</div>
            <span>I CAN HELP</span>
            <h3>Volunteer & Serve</h3>
            <p>Sort, organize, deliver, build, repair, listen, connect, mentor, pray, or help a Community Care project move forward.</p>
            <a href="#give-help">Volunteer →</a>
          </article>
        </div>
      </div>
    </section>

    <section className="section alt care-photo-band">
      <div className="container care-split">
        <div className="care-photo" aria-label="Community care clothing and pantry support"></div>
        <div>
          <div className="eyebrow">Dignity First</div>
          <h2>No cost. No shame.</h2>
          <p className="lead">People should be able to ask for help without feeling reduced to a problem. Community Care is designed around respect, privacy, practical support, and the possibility that every person also carries gifts, knowledge, or connection.</p>
          <blockquote className="care-quote">“Take what you need. Give what you can.”</blockquote>
        </div>
      </div>
    </section>

    <section className="section" id="request-help">
      <div className="container care-form-layout">
        <div>
          <div className="eyebrow">Request Help</div>
          <h2>Tell us what would make a difference.</h2>
          <p className="lead">Use the request structure below to think through what would help, then call Day Star so the need can be acknowledged and connected to the right person.</p>
          <div className="form-grid">
            {["Name or preferred name","Best way to contact you","What do you need right now?","Clothing / Pantry / Household / Transportation / Other","Is this urgent?","Anything we should know about privacy or safety?"].map((x,i)=><div className={'field '+(i>1?'full':'')} key={x}>{x}</div>)}
          </div>
          <div className="actions"><a className="button" href={site.forms.communityCare} target="_blank" rel="noreferrer">Submit Community Care Request</a><a className="button secondary" href={site.phoneHref}>Call Day Star • {site.phoneDisplay}</a></div><div className="privacy-note"><strong>Your dignity matters.</strong> A request for help should never automatically become a public story, prayer request, or social post.</div>
        </div>
        <aside className="care-side-card">
          <span>72 HR</span>
          <h3>Connection Target</h3>
          <p>When possible, the outreach system aims to acknowledge a need and begin finding a useful connection quickly—even when the final solution takes longer.</p>
          <div className="care-mini-flow"><b>NOTICE</b><i>→</i><b>CONNECT</b><i>→</i><b>SERVE</b></div>
        </aside>
      </div>
    </section>

    <section className="section alt" id="give-help">
      <div className="container">
        <div className="eyebrow">Give • Serve • Connect</div>
        <h2>There is more than one way to help.</h2>
        <div className="grid">
          <div className="card"><h3>Donate Useful Items</h3><p>Clothing, shelf-stable pantry goods, hygiene items, and practical household basics can support the Community Care Hub.</p></div>
          <div className="card"><h3>Give Time or Skill</h3><p>Organizing, delivery, repairs, building, mentoring, transportation, technology, and other practical skills can become service.</p></div>
          <div className="card"><h3>Make a Connection</h3><p>Sometimes the most valuable gift is knowing the person, organization, business, or ministry that can help with the next step.</p></div>
        </div>
        <div className="cta-band">
          <div><span>COMMUNITY CARE</span><h3>Want to help build the hub?</h3></div>
          <Link className="button" href="/skills-service">Explore Skills & Service</Link>
        </div>
      </div>
    </section>

    <section className="closing-light">
      <div className="container"><span>✦</span><blockquote>One connection creates another.</blockquote><small>C³ COMMUNITY CARE</small></div>
    </section>
  </main>
}