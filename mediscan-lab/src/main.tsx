import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css'; // For that luxury italic feel
import '@fontsource/playfair-display/600.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
