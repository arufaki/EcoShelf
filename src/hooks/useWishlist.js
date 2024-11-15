import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { supabase } from "../api/supabaseClient";

const useWishlist = (book, Toast) => {
    const { user, wishlist, deleteWishlist, updateWishlist } = useAppContext();
    const navigate = useNavigate();

    const isWishlisted = wishlist.includes(book.id);

    const toggleWishlist = async (book) => {
        if (user == null) return navigate("/login");

        if (isWishlisted) {
            const { error } = await supabase.from("wishlist").delete().eq("user_id", user.id).eq("book_id", book.id);
            if (error) {
                console.error("delete error :", error.message);
                Toast.fire({
                    icon: "error",
                    title: `${error.message}`,
                });
            } else {
                deleteWishlist(wishlist, book);
                Toast.fire({
                    icon: "success",
                    title: "Removed from Wishlist",
                });
            }
        } else {
            const { error } = await supabase.from("wishlist").insert([
                {
                    user_id: user.id,
                    book_id: book.id,
                },
            ]);
            if (error) {
                console.error("error tambah buku : ", error.message);
                Toast.fire({
                    icon: "error",
                    title: `${error.message}`,
                });
            } else {
                updateWishlist(book);
                Toast.fire({
                    icon: "success",
                    title: "Added to Wishlist",
                });
            }
        }
    };
    return {
        toggleWishlist,
        isWishlisted,
    };
};

export default useWishlist;
