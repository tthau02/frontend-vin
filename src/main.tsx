import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProviders } from '@/context/AppProviders';
import App from './App';
import { enableMocking } from './mocks/mock';
enableMocking().then(() => {
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)})
