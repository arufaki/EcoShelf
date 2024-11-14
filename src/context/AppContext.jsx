import { createContext, useState, useContext, useEffect } from "react";
import userReviews from "../utils/data/userReview";
import { useFetchData } from "../hooks/useFetchData";
import { supabase } from "../api/supabaseClient";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Global State
    const [reviews, setReviews] = useState(userReviews);
    const [user, setUser] = useState(null);
    const [wishlist, setWishlist] = useState([]);

    // Custom Hooks
    const books = useFetchData();

    // Global Function for Login Logout
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    // Fetch Wishlist
    useEffect(() => {
        const getWishlist = async () => {
            if (user != null) {
                const { data, error } = await supabase.from("wishlist").select("book_id").eq("user_id", user.id);
                if (error) {
                    console.error("get wishlist : ", error.message);
                } else {
                    setWishlist(data.map((item) => item.book_id));
                }
            }
        };
        getWishlist();
    }, [user]);

    // Global function for Wishlist
    const deleteWishlist = (datas, book) => setWishlist(datas.filter((id) => id != book.id));
    const updateWishlist = (book) => setWishlist([...wishlist, book.id]);

    const datas = {
        reviews,
        books,
        user,
        login,
        logout,
        wishlist,
        deleteWishlist,
        updateWishlist,
    };
    return <AppContext.Provider value={datas}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
