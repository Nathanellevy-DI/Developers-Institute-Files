import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BuggyCounter} from './App.tsx'
import {ErrorBoundary} from "../error-boundary.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
    </ErrorBoundary>
  </StrictMode>,
)
