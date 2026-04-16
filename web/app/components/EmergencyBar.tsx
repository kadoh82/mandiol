"use client";

const contacts = [
  { label: "999", dial: "999", urgent: true },
  { label: "101", dial: "101", urgent: false },
  { label: "DA Helpline", dial: "08082000247", display: "0808 2000 247" },
  { label: "Rape Crisis", dial: "08088029999", display: "0808 802 9999" },
  { label: "Victim Support", dial: "08081689111", display: "0808 168 9111" },
  { label: "Revenge Porn", dial: "03456000459", display: "0345 6000 459" },
];

export default function EmergencyBar() {
  return (
    <div className="bg-plum-800 text-white">
      <div className="mx-auto flex max-w-md items-center gap-2 overflow-x-auto px-3 py-2 hide-scrollbar">
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-wider text-cream-300">
          Help:
        </span>
        {contacts.map((c) => (
          <a
            key={c.dial}
            href={`tel:${c.dial}`}
            className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
              c.urgent
                ? "bg-alert text-white"
                : "bg-plum-600 text-cream-200 hover:bg-plum-500"
            }`}
          >
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}
