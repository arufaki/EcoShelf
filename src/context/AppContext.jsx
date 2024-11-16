import { createContext, useState, useContext, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { supabase } from "../api/supabaseClient";
import { Toast } from "../utils/function/toast";

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
    const fetchReviewsBook = async (book, userFilter = null) => {
        let query = supabase.from("reviews").select("*");

        if (book) {
            query = query.eq("book_id", book.id);
        }

        if (userFilter) {
            query = query.eq("user_id", userFilter.id);
        }

        const { data, error } = await query;
        if (error) {
            console.error("Get Review", error.message);
        } else {
            setReviews(data);
        }
    };

    // Global function for Review
    const addReview = (newReview) => {
        setReviews((prevReview) => [...prevReview, newReview]);
    };
    const updateReview = (updatedReview) => {
        setReviews((prevReviews) => prevReviews.map((review) => (review.id === updatedReview.id ? updatedReview : review)));
    };
    const deleteReview = async (reviewId) => {
        const { error } = await supabase.from("reviews").delete().eq("id", reviewId);
        if (error) {
            console.error("Delete Review Error : ", error.message);
        } else {
            setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
            Toast.fire({
                icon: "success",
                title: "Delete Review Success",
            });
        }
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
        deleteReview,
    };
    return <AppContext.Provider value={datas}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
