import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeProvider.tsx';
import { ContextsProvider } from './contexts/ContextProvider.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ContextsProvider>
        <App />
      </ContextsProvider>
    </ThemeProvider>
  </StrictMode>,
);
