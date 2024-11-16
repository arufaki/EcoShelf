import { useEffect, useState } from "react";
import { supabase } from "../api/supabaseClient";
import { useAppContext } from "../context/AppContext";
import { Toast } from "../utils/function/toast";

const useReview = (book, closeModal) => {
    const { user, addReview, reviews, updateReview } = useAppContext();

    const [existReview, setExistReview] = useState(null);
    const [formReview, setFormReview] = useState({
        rating: 3,
        review: "",
    });

    useEffect(() => {
        const checkExistReview = async () => {
            const { data, error } = await supabase.from("reviews").select("*").eq("user_id", user.id).eq("book_id", book.id).maybeSingle();
            if (error && error.code !== "PGRST116") {
                console.error(error.message);
            } else {
                setExistReview(data);
                setFormReview({
                    rating: data?.rating ?? 3,
                    review: data?.review ?? "",
                });
            }
        };

        if (user) checkExistReview();
    }, [user, reviews]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormReview((prevData) => ({
            ...prevData,
            [name]: name === "rating" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async () => {
        const { rating, review } = formReview;

        if (existReview) {
            const { data, error } = await supabase.from("reviews").update({ rating, review }).eq("id", existReview.id).select();
            if (error) {
                console.error("Error mengupdate ulasan:", error.message);
                Toast.fire({
                    icon: "error",
                    title: `${error.message}`,
                });
            } else {
                updateReview(data[0]);
                closeModal();
                Toast.fire({
                    icon: "success",
                    title: "Update Review Successfully",
                });
            }
        } else {
            const { data, error } = await supabase
                .from("reviews")
                .insert([
                    {
                        user_id: user.id,
                        user_name: user.user_metadata.display_name,
                        book_id: book.id,
                        rating,
                        review,
                    },
                ])
                .select();

            if (error) {
                console.error("error insert book review : ", error.message);
                Toast.fire({
                    icon: "error",
                    title: `${error.message}`,
                });
            } else {
                addReview(data[0]);
                setExistReview(data[0]);
                setFormReview({ rating: 3, review: "" });
                closeModal();
                Toast.fire({
                    icon: "success",
                    title: "Add Review Successfully",
                });
            }
        }
    };

    return { formReview, existReview, handleChange, handleSubmit };
};

export default useReview;
