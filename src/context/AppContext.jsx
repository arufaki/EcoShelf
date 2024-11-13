import { createContext, useState, useContext } from "react";
import userReviews from "../utils/data/userReview";
import { useFetchData } from "../hooks/useFetchData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Global State
    const [reviews, setReviews] = useState(userReviews);
    const [user, setUser] = useState(null);

    // Custom Hooks
    const books = useFetchData();

    // Global Function
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    const datas = {
        reviews,
        books,
        user,
        login,
        logout,
    };
    return <AppContext.Provider value={datas}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
