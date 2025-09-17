import { createContext, useState } from "react";

// The actual value(s) we want to grab from another component
// Initialized to null since we don't have the user object yet
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    // value includes destructured user and setter function after capturing user object
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}