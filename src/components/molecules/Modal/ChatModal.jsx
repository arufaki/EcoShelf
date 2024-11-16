import BubbleChat from "../BubbleChat/BubbleChat";
import { generationConfig, initGenerativeAI, safetySettings } from "../../../services/gemini/generativeAI";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { DEFAULT_PROMPT } from "../../../utils/data/constants";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ChatModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [response, setResponse] = useState([]);
    const bottom = useRef(null);

    const { books, user } = useAppContext();
    const navigate = useNavigate();

    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const genAI = initGenerativeAI(geminiKey);

    const generate = async (input) => {
        try {
            const hit = await genAI.generateContent(DEFAULT_PROMPT(books, input), generationConfig, safetySettings);
            const resAI = hit.response.text();
            setResponse((prevRes) => prevRes.map((item, index) => (index === prevRes.length - 1 ? { ...item, response: resAI } : item)));
        } catch (error) {
            console.error("AI GEMINI ERROR :", error);
            setResponse((prevRes) => prevRes.map((item, index) => (index === prevRes.length - 1 ? { ...item, response: "Prompt mu melanggar ketentuan ! tolong refresh halaman ini yaa!" } : item)));
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setResponse((prevRes) => [...prevRes, { prompt: input, response: "Typing..." }]);
    //     generate();
    //     setInput("");
    // };

    const onSubmit = (data) => {
        setResponse((prevRes) => [...prevRes, { prompt: data.input, response: "Typing..." }]);
        generate(data.input);
        reset();
    };

    const closeModal = () => {
        document.getElementById("my_modal_4").close();
    };

    const openModal = () => {
        if (user == null) return navigate("/login");
        document.getElementById("my_modal_4").showModal();
    };

    useEffect(() => {
        bottom.current.scrollIntoView({ behavior: "smooth" });
    }, [response]);

    return (
        <>
            <button className="btn btn-outline btn-success outline-none hover:!text-white" onClick={openModal}>
                Chat with AI Book
            </button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box pt-[0rem] w-11/12 max-w-5xl h-full bg-white">
                    <div className="py-5 border-b flex w-full justify-between items-center bg-white sticky top-0 z-10">
                        <div className="pt-3">
                            <h3 className="font-bold text-2xl font-poppins text-green-800">EcoShelf AI</h3>
                        </div>
                        <button className="btn btn-sm btn-circle btn-ghost " onClick={closeModal}>
                            ✕
                        </button>
                    </div>
                    <BubbleChat response={response} ref={bottom} />
                    <form className="flex flex-row gap-x-3" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Type here"
                            {...register("input", { required: "This field is required", minLength: { value: 10, message: "Prompt must be at least 10 characters" } })}
                            className="input input-bordered w-full bg-white focus:outline-none"
                        />
                        <button className="btn btn-success text-white font-poppins">Send Message</button>
                    </form>
                    {errors.input && <p className="text-red-500 text-sm">{errors.input.message}</p>}
                </div>
            </dialog>
        </>
    );
};

export default ChatModal;
