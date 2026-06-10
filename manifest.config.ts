import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest({
  manifest_version: 3,
  name: 'Focus Mode Activator',
  version: '0.1.0',
  description: 'Toggle Focus Mode, block notifications, and track productivity sessions.',
  permissions: ['storage', 'alarms', 'notifications', 'activeTab'],
  action: {
    default_popup: 'popup.html',
    default_title: 'Focus Mode Activator',
  },
  options_page: 'options.html',
  background: {
    service_worker: 'src/background/service-worker.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content/content-script.ts'],
      run_at: 'document_idle',
    },
  ],
});
