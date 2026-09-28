# Day Star Ministries — Full Website Starter

A modular Next.js website architecture built for Day Star Ministries.

## Core routes
- `/` Home
- `/im-new` visitor pathway
- `/watch` unified Sunday Service + Tuesday Prayer Live archive
- `/connect` C3: Coffee • Conversation • Christ
- `/ministries`
- `/events`
- `/prayer`
- `/stories` Day Star Stories: testimony + church-experience portal
- `/give`

## Future routes already parked
- `/across-borders`
- `/skills-service`

## Media archive workflow
Edit `data/media.ts` and add one record for every Sunday service or Tuesday Prayer Live recording. Each record supports title, kind, date, speaker, summary, Facebook URL, embed URL, tags, and featured status.

Recommended later automation:
1. Pastor Sammy finishes Facebook Live.
2. Recording URL is captured.
3. Add or sync the recording into `data/media.ts` or a future Supabase `media` table.
4. `/watch` automatically separates Sunday services and Tuesday prayer meetings.
5. Featured recordings appear on the homepage.

## Story workflow
The `/stories` page reserves fields for written testimony, church experience/review, public-service sharing request, audio/video, help telling the story, contact permission, publication permission, and anonymity.

Nothing should publish automatically. Review and permission are separate.

## Plug-and-play design principle
Routes, cards, future modules, and data shapes are created before every program is active. Future content can be turned on without redesigning the site.

## Next technical step
Replace placeholder data with approved Day Star information and connect forms/media to Supabase or the church's preferred backend.
