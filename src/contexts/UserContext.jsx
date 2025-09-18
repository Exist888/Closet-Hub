import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../services/firebase/firebase.js";

// Use Context to capture these values from other components
// Initialize to null since we don't have the user object yet
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    // Include destructured user and setter function after capturing user object
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        // Call listener to track auth state changes throughout app
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        // Stop listener on unmount
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}