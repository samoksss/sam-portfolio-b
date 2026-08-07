import { createFileRoute } from "@tanstack/react-router";
import { Film, Zap, Users, Star, Mail, Twitter, MessageCircle } from "lucide-react";
import samPhoto from "@/assets/sam.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sam B. — Video Editor for Businesses" },
      {
        name: "description",
        content:
          "Portfolio of Sam B., a video editor for businesses. Long-form videos, vertical shorts and client testimonials.",
      },
      { property: "og:title", content: "Sam B. — Video Editor for Businesses" },
      {
        property: "og:description",
        content:
          "Portfolio of Sam B., a video editor for businesses. Long-form videos, vertical shorts and client testimonials.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "VIDEOS", href: "#videos" },
  { label: "SHORTS", href: "#shorts" },
  { label: "CLIENTS", href: "#clients" },
  { label: "CONTACT", href: "#contact" },
];

const VIDEOS = ["Ye_O3HchT6c", "xaWUfNrtCoc", "79iedZj3xRo", "fZ_KCC0aYX0"];
const SHORTS = ["NwNJ5U4SIjQ", "G9xXIMOupGg", "1LB8GOb75Qo"];

const TESTIMONIALS = [
  {
    text: "Awesome editor, helped us make epic trailers, refine footage, create compelling content for social media and paid advertising, iterated quickly, communicated, and even went above and beyond the requirements where needed.",
    name: "Adrian",
    role: "CEO at Eon Rush Studios",
  },
  {
    text: "He has been very easy to work with and responsive. He does his due diligence to make sure that the content he has created is to my liking and goes above and beyond for the content to be entertaining and capturing. He's created masterpieces that have gained me traction for my brand. If you're looking for someone who is creative and can make little out of nothing, I would recommend him 100%.",
    name: "Benjamin",
    role: "CEO at Cloudnine StreetHeat",
  },
  {
    text: "His work was insanely thorough. And he is hilarious and adds his own twist to the edits. I was extremely satisfied when receiving his work.",
    name: "Smerfue",
    role: "Content Creator",
  },
  {
    text: "Nice Work.",
    name: "Stellar",
    role: "Documentary Channel",
  },
];

const CONTACTS = [
  { icon: Mail, label: "E-mail", value: "samuelbritomkt@gmail.com", href: "mailto:samuelbritomkt@gmail.com" },
  { icon: Twitter, label: "X / Twitter", value: "@videoeditbysam", href: "https://x.com/videoeditbysam" },
  { icon: MessageCircle, label: "Discord", value: ".samuelbrito", href: undefined },
];

function SectionTitle({ children, id }: { children: string; id: string }) {
  return (
    <div className="mb-14 text-center">
      <h2 id={`${id}-heading`} className="section-title text-2xl sm:text-3xl">
        {children}
      </h2>
      <div className="mx-auto mt-5 h-px w-16 bg-primary/50" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-center gap-5 px-4 py-4 sm:gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.65rem] tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary sm:text-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-32">
        {/* HERO */}
        <section className="flex min-h-[78vh] items-center justify-center py-10">
          <div className="card-outline mx-auto w-full max-w-xl px-7 py-14 text-center sm:px-12">
            <img
              src={samPhoto}
              alt="Portrait of Sam B., video editor"
              className="mx-auto h-32 w-32 rounded-full border border-border object-cover sm:h-36 sm:w-36"
              width={144}
              height={144}
            />
            <h1 className="mt-8 text-4xl font-bold uppercase tracking-[0.14em] sm:text-5xl">Sam B.</h1>
            <p className="mt-3 text-sm font-light tracking-[0.18em] text-muted-foreground sm:text-base">
              Video Editor for Businesses
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="#videos" className="pill">
                <Film className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Videos
              </a>
              <a href="#shorts" className="pill">
                <Zap className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Shorts
              </a>
              <a href="#clients" className="pill">
                <Users className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Clients
              </a>
            </div>

            <a
              href="https://x.com/videoeditbysam"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-4 w-4 shrink-0" aria-hidden="true" />
              @videoeditbysam
            </a>
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" aria-labelledby="videos-heading" className="py-24">
          <SectionTitle id="videos">VIDEOS</SectionTitle>
          <div className="grid gap-8 sm:grid-cols-2">
            {VIDEOS.map((id) => (
              <div key={id} className="card-outline overflow-hidden p-2">
                <div className="aspect-video w-full overflow-hidden rounded-[calc(var(--radius)-6px)]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video by Sam B."
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHORTS */}
        <section id="shorts" aria-labelledby="shorts-heading" className="py-24">
          <SectionTitle id="shorts">SHORTS</SectionTitle>
          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3">
            {SHORTS.map((id) => (
              <div key={id} className="card-outline overflow-hidden p-2">
                <div className="aspect-[9/16] w-full overflow-hidden rounded-[calc(var(--radius)-6px)]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube short by Sam B."
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENTS */}
        <section id="clients" aria-labelledby="clients-heading" className="py-24">
          <SectionTitle id="clients">CLIENTS</SectionTitle>
          <div className="grid gap-8 sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card-outline flex flex-col gap-5 p-8">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 shrink-0 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-auto text-sm">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="mt-0.5 block text-xs tracking-wide text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <SectionTitle id="contact">CONTACT</SectionTitle>
          <div className="card-outline mx-auto max-w-xl divide-y divide-border p-2">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 px-5 py-5">
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                    <p className="truncate text-sm text-foreground">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="block transition-colors hover:bg-secondary/50">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center">
        <p className="text-[0.65rem] tracking-[0.24em] text-muted-foreground">© 2026 SAM — VIDEO EDITOR</p>
      </footer>
    </div>
  );
}
