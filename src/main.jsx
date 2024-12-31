import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';

const clerkApiKey = "pk_test_bmV4dC1lYXJ3aWctOTIuY2xlcmsuYWNjb3VudHMuZGV2JA";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={clerkApiKey}>
            <Router>
                <App />
            </Router>
        </ClerkProvider>
    </React.StrictMode>
);
