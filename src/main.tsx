import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, FiltersProvider } from './contexts/Context.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </ThemeProvider>
  </StrictMode>,
);
