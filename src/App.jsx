import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { SignIn, useUser, useClerk } from '@clerk/clerk-react';
import PublicPage from './components/PublicPage';
import ProtectedPage from './components/ProtectedPage';

const App = () => {
    const { isSignedIn } = useUser();
    const { signOut } = useClerk();

    return (
        <div id="app">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/protected">Protected</Link>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Routes>
                    {/* Default Route */}
                    <Route
                        path="/"
                        element={
                            isSignedIn ? (
                                <ProtectedPage />
                            ) : (
                                <PublicPage />
                            )
                        }
                    />
                    {/* Protected Route */}
                    <Route
                        path="/protected"
                        element={
                            isSignedIn ? (
                                <ProtectedPage />
                            ) : (
                                <h1>You must be logged in to view this page.</h1>
                            )
                        }
                    />
                </Routes>
                <div style={{ marginLeft: '20px', width: '300px' }}>
                    {!isSignedIn ? (
                        <div className="sign-in-container">
                            <SignIn/>
                        </div>
                    ) : (
                        <button onClick={() => signOut()}>Sign Out</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
