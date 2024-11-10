import { createContext, useState, useContext } from "react";
import userReviews from "../utils/userReview";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [reviews, setReviews] = useState(userReviews);

    return <AppContext.Provider value={{ reviews }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
