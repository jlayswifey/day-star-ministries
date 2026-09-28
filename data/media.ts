export type MediaKind = "Sunday Service" | "Tuesday Prayer Live";

export type MediaItem = {
  slug: string;
  title: string;
  kind: MediaKind;
  date: string;
  speaker?: string;
  summary?: string;
  facebookUrl?: string;
  embedUrl?: string;
  tags?: string[];
  featured?: boolean;
};

// Plug-and-play archive: add one object per recording.
// facebookUrl can link to the original FB Live post.
// embedUrl can later point to YouTube/Vimeo/Facebook embed URLs if desired.
export const mediaArchive: MediaItem[] = [
  {
    slug: "sunday-service-placeholder",
    title: "Sunday Service — Latest Message",
    kind: "Sunday Service",
    date: "2026-08-16",
    speaker: "Pastor Sammy",
    summary: "Placeholder for the latest Sunday worship service recording.",
    facebookUrl: "#",
    tags: ["Sunday", "Worship", "Message"],
    featured: true
  },
  {
    slug: "tuesday-prayer-placeholder",
    title: "Tuesday Night Prayer — Latest Live",
    kind: "Tuesday Prayer Live",
    date: "2026-08-18",
    speaker: "Pastor Sammy",
    summary: "Placeholder for the latest Tuesday night Facebook Live prayer meeting.",
    facebookUrl: "#",
    tags: ["Prayer", "Tuesday", "Facebook Live"],
    featured: true
  }
];
