import { forwardRef } from "react";
import { useAppContext } from "../../../context/AppContext";

const BubbleChat = forwardRef(({ response }, ref) => {
    const { user } = useAppContext();
    return (
        <div
            className="flex-grow space-y-4 h-[660px] overflow-y-scroll"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                overflowY: "scroll",
            }}
        >
            {response.map((res, index) => (
                <div key={index}>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header font-poppins">{user.user_metadata.display_name}</div>
                        <div className="chat-bubble bg-slate-300 text-green-950 font-poppins">{res.prompt}</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header font-poppins">Eco-AI</div>
                        <div className="chat-bubble bg-slate-500 text-white font-poppins">{res.response}</div>
                    </div>
                </div>
            ))}
            <div ref={ref} />
        </div>
    );
});

export default BubbleChat;
