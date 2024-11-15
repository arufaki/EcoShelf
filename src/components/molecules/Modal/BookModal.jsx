import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import useReview from "../../../hooks/useReview";

const BookModal = ({ book }) => {
    const navigate = useNavigate();
    const { user } = useAppContext();

    const openModal = () => {
        if (user == null) return navigate("/login");
        document.getElementById("my_modal_1").showModal();
    };
    const closeModal = () => {
        document.getElementById("my_modal_1").close();
    };

    const { formReview, existReview, handleChange, handleSubmit } = useReview(book, closeModal);

    // useEffect(() => {
    //     const checkExistReview = async () => {
    //         const { data, error } = await supabase.from("reviews").select("*").eq("user_id", user.id).eq("book_id", book.id).maybeSingle();
    //         if (error && error.code !== "PGRST116") {
    //             console.error(error.message);
    //         } else {
    //             setExistReview(data);
    //             setFormReview({
    //                 rating: data?.rating ?? 3,
    //                 review: data?.review ?? "",
    //             });
    //         }
    //     };

    //     if (user) checkExistReview();
    // }, [user, reviews]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormReview((prevData) => ({
    //         ...prevData,
    //         [name]: name === "rating" ? parseInt(value) : value,
    //     }));
    // };

    // const handleSubmit = async () => {
    //     const { rating, review } = formReview;

    //     if (existReview) {
    //         const { data, error } = await supabase.from("reviews").update({ rating, review }).eq("id", existReview.id).select();
    //         if (error) {
    //             console.error("Error mengupdate ulasan:", error.message);
    //         } else {
    //             updateReview(data[0]);
    //             closeModal();
    //         }
    //     } else {
    //         const { data, error } = await supabase
    //             .from("reviews")
    //             .insert([
    //                 {
    //                     user_id: user.id,
    //                     user_name: user.user_metadata.display_name,
    //                     book_id: book.id,
    //                     rating,
    //                     review,
    //                 },
    //             ])
    //             .select();

    //         if (error) {
    //             console.error("error tambah buku : ", error.message);
    //         } else {
    //             addReview(data[0]);
    //             setExistReview(data[0]);
    //             setFormReview({ rating: 3, review: "" });
    //             closeModal();
    //         }
    //     }
    // };
    return (
        <div>
            <button className="btn btn-outline btn-success outline-none hover:!text-white font-poppins" onClick={openModal}>
                {existReview ? "Edit Your Review" : "Write a Review"}
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-semibold text-3xl text-green-700 font-poppins tracking-tight">{existReview ? "Edit Your Review" : "Add Your Review"}</h3>
                    <p className="py-4 text-slate-500">{`Share your thoughts about "${book.volumeInfo.title}" with other readers.`}</p>
                    <div className="pb-4">
                        <h4 className="font-poppins text-green-950 font-semibold">Rating</h4>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input type="radio" name="rating" value={star} key={star} checked={formReview.rating == star} onChange={handleChange} className="mask mask-star-2 bg-green-600" />
                            ))}
                        </div>
                    </div>
                    <textarea
                        className="textarea textarea-bordered w-full bg-white focus:outline-none"
                        name="review"
                        value={formReview.review}
                        onChange={handleChange}
                        placeholder="Your Review..."
                    ></textarea>
                    <div className="modal-action gap-2 flex flex-row">
                        <button className="dialog btn btn-outline btn-success outline-none hover:!text-white font-poppins" onClick={closeModal}>
                            Cancel
                        </button>

                        <button className="btn btn-success text-white font-poppins" onClick={handleSubmit}>
                            Submit Review
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookModal;
