import { createContext, useState, useContext } from "react";
import userReviews from "../utils/data/userReview";
import { useFetchData } from "../hooks/useFetchData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [reviews, setReviews] = useState(userReviews);
    const books = useFetchData();

    const datas = {
        reviews,
        books,
    };
    return <AppContext.Provider value={datas}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
