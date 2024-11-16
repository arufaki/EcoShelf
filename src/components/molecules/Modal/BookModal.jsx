import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import useReview from "../../../hooks/useReview";

const BookModal = ({ book, disableButton }) => {
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

    return (
        <div>
            <button
                className="btn btn-outline btn-success outline-none hover:!text-white font-poppins disabled:text-white disabled:btn-outline disabled:cursor-pointer"
                onClick={openModal}
                disabled={disableButton}
            >
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
