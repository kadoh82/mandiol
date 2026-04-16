import { getVideos } from "@/lib/data";

export const metadata = { title: "Videos | Mandiol" };

const categoryLabels: Record<string, string> = {
  consent: "Understanding consent",
  "coercive-control": "Coercive control",
  reporting: "Reporting to police",
  support: "Getting support",
  legal: "Legal information",
  recovery: "Recovery & empowerment",
};

export default function VideosPage() {
  const videos = getVideos();

  // Group by category
  const grouped = videos.reduce<Record<string, typeof videos>>(
    (acc, v) => {
      const cat = v.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(v);
      return acc;
    },
    {}
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl text-plum">Videos</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Curated videos explaining your rights, the police process, and
          support available. All from verified UK organisations.
        </p>
      </div>

      {Object.entries(grouped).map(([category, vids]) => (
        <section key={category} className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            {categoryLabels[category] || category}
          </h2>
          {vids.map((v) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-2xl border border-border bg-white"
            >
              {/* YouTube embed */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-plum">{v.title}</h3>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                  {v.description}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-ink-muted">
                  <span>{v.duration}</span>
                  {v.recommended && (
                    <span className="rounded-full bg-sage-50 px-2 py-0.5 font-medium text-sage-600">
                      Recommended
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
