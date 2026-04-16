export const metadata = { title: "Settings | Mandiol" };

const settingsGroups = [
  {
    heading: "Security",
    items: [
      {
        label: "Change PIN",
        description: "Update your 4–6 digit PIN",
        type: "action" as const,
      },
      {
        label: "Biometric unlock",
        description: "Use Face ID or fingerprint as a second factor",
        type: "toggle" as const,
        enabled: false,
      },
      {
        label: "Decoy PIN",
        description: "Set a separate PIN that opens the decoy app",
        type: "action" as const,
      },
    ],
  },
  {
    heading: "Disguise",
    items: [
      {
        label: "App icon",
        description: "Choose from 5 inconspicuous icon designs",
        type: "action" as const,
        value: "Daily Planner",
      },
      {
        label: "App name",
        description: "What appears on the home screen",
        type: "action" as const,
        value: "Daily Planner",
      },
    ],
  },
  {
    heading: "Quick Exit",
    items: [
      {
        label: "Exit URL",
        description: "Where the quick exit button takes you",
        type: "action" as const,
        value: "bbc.co.uk/weather",
      },
    ],
  },
  {
    heading: "Privacy",
    items: [
      {
        label: "Block screenshots",
        description: "Prevent screenshots within the app",
        type: "toggle" as const,
        enabled: true,
      },
      {
        label: "Hide from recent apps",
        description: "Show a blank preview in the app switcher",
        type: "toggle" as const,
        enabled: true,
      },
      {
        label: "Disable notifications",
        description: "Prevent any lock screen notifications",
        type: "toggle" as const,
        enabled: true,
      },
    ],
  },
  {
    heading: "Data",
    items: [
      {
        label: "Clear all data",
        description: "Permanently delete all Mandiol data from this device",
        type: "danger" as const,
      },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl text-plum">Settings</h1>

      <div className="rounded-2xl border-2 border-dashed border-border bg-white p-4 text-center">
        <p className="text-xs font-medium text-plum">Native app preview</p>
        <p className="text-[11px] text-ink-muted">
          These settings will be functional in the React Native app. This is a
          preview of the settings interface.
        </p>
      </div>

      {settingsGroups.map((group) => (
        <section key={group.heading}>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-muted">
            {group.heading}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-white divide-y divide-border">
            {group.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-3"
              >
                <div>
                  <p
                    className={`text-sm font-medium ${
                      item.type === "danger" ? "text-alert" : "text-plum"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    {item.description}
                  </p>
                </div>
                {item.type === "toggle" && (
                  <div
                    className={`h-6 w-10 rounded-full ${
                      item.enabled ? "bg-sage" : "bg-border"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform ${
                        item.enabled ? "translate-x-[18px]" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                )}
                {item.type === "action" && (
                  <div className="flex items-center gap-1 text-xs text-ink-muted">
                    {"value" in item && <span>{item.value}</span>}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {item.type === "danger" && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-alert">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
