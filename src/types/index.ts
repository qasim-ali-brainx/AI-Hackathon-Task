/**
 * Shared type definitions for Focus Mode Activator.
 * These types will be used across popup, options, background, and storage layers.
 */

/** Whether Focus Mode is currently active. */
export interface FocusState {
  isActive: boolean;
  /** ISO timestamp when Focus Mode was last toggled. */
  lastToggledAt: string | null;
}

/** A single blocked notification attempt during a focus session. */
export interface BlockedNotification {
  id: string;
  domain: string;
  /** ISO timestamp of the blocked attempt. */
  timestamp: string;
  /** Notification title or message preview, if available. */
  preview: string | null;
}

/** Aggregated data for a completed or in-progress focus session. */
export interface SessionData {
  id: string;
  startedAt: string;
  endedAt: string | null;
  blockedCount: number;
  blockedNotifications: BlockedNotification[];
}

/** User-configurable extension settings. */
export interface Settings {
  /** Domains exempt from notification blocking. */
  whitelist: string[];
  /** Whether scheduled Focus Mode is enabled. */
  scheduleEnabled: boolean;
  /** Keyboard shortcut preference label (actual binding lives in manifest commands). */
  shortcutEnabled: boolean;
}

/** Default values used when storage keys are unset. */
export const DEFAULT_FOCUS_STATE: FocusState = {
  isActive: false,
  lastToggledAt: null,
};

export const DEFAULT_SETTINGS: Settings = {
  whitelist: [],
  scheduleEnabled: false,
  shortcutEnabled: false,
};
