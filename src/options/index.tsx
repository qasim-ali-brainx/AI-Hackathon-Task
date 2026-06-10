import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Options } from './Options';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Options root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <Options />
  </StrictMode>,
);
