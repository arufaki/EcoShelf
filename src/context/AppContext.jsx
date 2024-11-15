import { createContext, useState, useContext, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { supabase } from "../api/supabaseClient";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Global State
    const [reviews, setReviews] = useState([]);
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

    // Fetch reviews
    const fetchReviewsBook = async (book) => {
        if (user != null) {
            const { data, error } = await supabase.from("reviews").select("*").eq("book_id", book.id);
            if (error) {
                console.error("get reviews : ", error.message);
            } else {
                setReviews(data);
            }
        }
    };

    // Global function for Review
    const addReview = (newReview) => {
        setReviews((prevReview) => [...prevReview, newReview]);
    };
    const updateReview = (updatedReview) => {
        setReviews((prevReviews) => prevReviews.map((review) => (review.id === updatedReview.id ? updatedReview : review)));
    };

    const datas = {
        reviews,
        books,
        user,
        login,
        logout,
        wishlist,
        deleteWishlist,
        updateWishlist,
        addReview,
        fetchReviewsBook,
        updateReview,
    };
    return <AppContext.Provider value={datas}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
