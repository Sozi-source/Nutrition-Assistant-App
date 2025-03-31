import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName || "User"}!</h2>
                    <p>Email: {user.email}</p>
                    <p>UID: {user.uid}</p>
                    <p>Email Verified: {user.emailVerified ? "✅ Yes" : "❌ No"}</p>
                    {user.photoURL && <img src={user.photoURL} alt="Profile" />}
                </div>
            ) : (
                <p>No user is signed in.</p>
            )}
        </div>
    );
};

export default UserProfile;
