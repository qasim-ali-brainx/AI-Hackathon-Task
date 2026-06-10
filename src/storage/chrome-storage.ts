import type { FocusState, SessionData, Settings } from '@/types';
import {
  DEFAULT_FOCUS_STATE,
  DEFAULT_SETTINGS,
} from '@/types';

/** Storage keys used by chrome.storage.local. */
export const StorageKeys = {
  FOCUS_STATE: 'focusState',
  CURRENT_SESSION: 'currentSession',
  SESSION_HISTORY: 'sessionHistory',
  SETTINGS: 'settings',
} as const;

type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

/**
 * Reusable wrapper around chrome.storage.local.
 * Centralizes read/write so popup, options, and background share one API.
 */
class ChromeStorageService {
  private async get<T>(key: StorageKey): Promise<T | undefined> {
    const result = await chrome.storage.local.get(key);
    return result[key] as T | undefined;
  }

  private async set<T>(key: StorageKey, value: T): Promise<void> {
    await chrome.storage.local.set({ [key]: value });
  }

  // --- Focus state (future: toggled by popup / background) ---

  async getFocusState(): Promise<FocusState> {
    const stored = await this.get<FocusState>(StorageKeys.FOCUS_STATE);
    return stored ?? DEFAULT_FOCUS_STATE;
  }

  async setFocusState(state: FocusState): Promise<void> {
    await this.set(StorageKeys.FOCUS_STATE, state);
  }

  // --- Session data (future: tracked by background during Focus Mode) ---

  async getCurrentSession(): Promise<SessionData | null> {
    const stored = await this.get<SessionData>(StorageKeys.CURRENT_SESSION);
    return stored ?? null;
  }

  async setCurrentSession(session: SessionData | null): Promise<void> {
    if (session === null) {
      await chrome.storage.local.remove(StorageKeys.CURRENT_SESSION);
      return;
    }
    await this.set(StorageKeys.CURRENT_SESSION, session);
  }

  async getSessionHistory(): Promise<SessionData[]> {
    const stored = await this.get<SessionData[]>(StorageKeys.SESSION_HISTORY);
    return stored ?? [];
  }

  async appendSession(session: SessionData): Promise<void> {
    const history = await this.getSessionHistory();
    await this.set(StorageKeys.SESSION_HISTORY, [...history, session]);
  }

  // --- Settings (future: managed from options page) ---

  async getSettings(): Promise<Settings> {
    const stored = await this.get<Settings>(StorageKeys.SETTINGS);
    return stored ?? DEFAULT_SETTINGS;
  }

  async setSettings(settings: Settings): Promise<void> {
    await this.set(StorageKeys.SETTINGS, settings);
  }
}

export const chromeStorage = new ChromeStorageService();
