/**
 * Content script injected into web pages.
 *
 * Future responsibilities:
 * - Intercept browser Notification API calls while Focus Mode is active
 * - Report blocked notification attempts to the background service worker
 * - Respect per-domain whitelist settings
 * - Provide per-domain analytics data to the background layer
 */

console.info('[Focus Mode Activator] Content script initialized');

// Future: wrap window.Notification to block requests when Focus Mode is active
// Future: listen for focus-state changes from background via chrome.runtime.onMessage
