import '@/assets/styles/popup.css';

/**
 * Extension popup UI.
 * Future: read/write focus state via chromeStorage and message the background worker.
 */
export function Popup() {
  return (
    <main className="popup">
      <header className="popup__header">
        <h1 className="popup__title">Focus Mode Activator</h1>
        <span className="popup__badge" aria-label="Focus Mode status">
          Inactive
        </span>
      </header>

      <section className="popup__body">
        <button
          type="button"
          className="popup__toggle"
          aria-label="Toggle Focus Mode"
        >
          Enable Focus Mode
        </button>
      </section>
    </main>
  );
}
