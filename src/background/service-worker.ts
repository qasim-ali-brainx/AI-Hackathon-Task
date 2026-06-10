/**
 * Background service worker for Focus Mode Activator.
 *
 * Future responsibilities:
 * - Toggle Focus Mode on/off in response to popup, shortcuts, or schedule alarms
 * - Coordinate notification blocking with content scripts
 * - Track blocked notification attempts and persist session data
 * - Fire chrome.alarms for scheduled Focus Mode windows
 * - Generate and expose session reports
 */

console.info('[Focus Mode Activator] Service worker initialized');

// Future: listen for extension install / update
chrome.runtime.onInstalled.addListener(() => {
  console.info('[Focus Mode Activator] Extension installed or updated');
});

// Future: handle Focus Mode toggle messages from popup
// chrome.runtime.onMessage.addListener(...)

// Future: respond to keyboard shortcut commands
// chrome.commands.onCommand.addListener(...)

// Future: trigger scheduled Focus Mode via chrome.alarms
// chrome.alarms.onAlarm.addListener(...)
