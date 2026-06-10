import '@/assets/styles/options.css';

interface SettingsSectionProps {
  title: string;
  description: string;
}

function SettingsSection({ title, description }: SettingsSectionProps) {
  return (
    <section className="options__section">
      <h2 className="options__section-title">{title}</h2>
      <p className="options__section-description">{description}</p>
    </section>
  );
}

/**
 * Full-page options UI.
 * Future: load and persist settings via chromeStorage.
 */
export function Options() {
  return (
    <main className="options">
      <header className="options__header">
        <h1 className="options__title">Focus Mode Activator</h1>
        <p className="options__subtitle">Settings</p>
      </header>

      <div className="options__sections">
        <SettingsSection
          title="General Settings"
          description="Configure default Focus Mode behavior and preferences."
        />
        <SettingsSection
          title="Whitelist"
          description="Manage domains that remain allowed during Focus Mode."
        />
        <SettingsSection
          title="Schedule"
          description="Set automatic Focus Mode start and end times."
        />
        <SettingsSection
          title="Reports"
          description="View session history and blocked notification analytics."
        />
      </div>
    </main>
  );
}
