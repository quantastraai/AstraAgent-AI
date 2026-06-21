import './SettingsPage.css'

export function SettingsPage() {
  return (
    <div className="settings-page">
      <header className="page-header">
        <div>
          <h1 className="page-header__title">Settings</h1>
          <p className="page-header__subtitle">
            Configure your AstraAgent AI workspace
          </p>
        </div>
      </header>

      <div className="settings-grid">
        <section className="settings-card">
          <h2>API Configuration</h2>
          <p>Connect your backend and LLM provider.</p>
          <label className="settings-field">
            <span>Backend URL</span>
            <input
              type="url"
              placeholder="http://localhost:8000"
              defaultValue="http://localhost:8000"
            />
          </label>
          <label className="settings-field">
            <span>API Key</span>
            <input type="password" placeholder="sk-..." />
          </label>
          <button type="button" className="btn btn--primary">
            Save Changes
          </button>
        </section>

        <section className="settings-card">
          <h2>Appearance</h2>
          <p>Customize the look and feel.</p>
          <label className="settings-field">
            <span>Theme</span>
            <select defaultValue="dark">
              <option value="dark">Dark (Astra)</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </label>
        </section>

        <section className="settings-card">
          <h2>Notifications</h2>
          <p>Control agent activity alerts.</p>
          <label className="settings-toggle">
            <input type="checkbox" defaultChecked />
            <span>Task completion alerts</span>
          </label>
          <label className="settings-toggle">
            <input type="checkbox" defaultChecked />
            <span>Agent status changes</span>
          </label>
          <label className="settings-toggle">
            <input type="checkbox" />
            <span>Weekly summary email</span>
          </label>
        </section>
      </div>
    </div>
  )
}
