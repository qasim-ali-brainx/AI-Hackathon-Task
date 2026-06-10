chatgpt chat link: https://chatgpt.com/share/6a294e8b-66b4-83e8-bc1b-e4af63c97ee6


# Focus Mode Activator

Chrome Extension (Manifest V3) foundation built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript (strict)
- Vite
- [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin) for Chrome Extension builds

## Getting Started

```bash
npm install
npm run dev    # watch mode — rebuilds on change
npm run build  # production build to dist/
```

## Load in Chrome

1. Run `npm run build`
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the `dist/` folder

## Project Structure

```
src/
├── popup/           # Extension popup UI (React)
├── options/         # Full-page settings UI (React)
├── background/      # MV3 service worker
├── content/         # Content scripts (injected into pages)
├── storage/         # chrome.storage.local wrapper
├── types/           # Shared TypeScript interfaces
├── hooks/           # Custom React hooks (future)
├── components/      # Shared UI components (future)
├── utils/           # Shared helpers (future)
└── assets/          # Styles and static assets
```

## Permissions

| Permission      | Future use                                      |
|-----------------|-------------------------------------------------|
| `storage`       | Focus state, sessions, settings                 |
| `alarms`        | Scheduled Focus Mode                            |
| `notifications` | Extension-level notification handling           |
| `activeTab`     | Context-aware actions on the active tab         |

## Status

Foundation only — no business logic implemented yet.
