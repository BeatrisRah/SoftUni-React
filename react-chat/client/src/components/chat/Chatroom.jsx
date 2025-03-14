import useFetch from "../../hooks/useFetch";
import ChatLeft from "./ChatLeft";

export default function Chatroom() {

    const [pending ,chats] = useFetch('get')
    return (
        <div className="h-screen flex flex-col">
            <div className="bg-gray-200 flex-1 overflow-y-scroll">
                <div className="px-4 py-2">
                    {pending && <span class="loader"></span>}
                    {chats.map(el => <ChatLeft key={el.id} data={el} />)}
                    
                </div>
            </div>
            <div className="bg-gray-100 px-4 py-2">
                <div className="flex items-center">
                    <input
                        className="w-full border rounded-full py-2 px-4 mr-2"
                        type="text"
                        placeholder="Type your message..."
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                        Send
                    </button>
                </div>
            </div>
        </div>

    );
}