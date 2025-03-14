import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ChatLeft from "./ChatLeft";
import usePostFetch from "../../hooks/usePostFetch";

export default function Chatroom() {

    const [pending ,chats, setChats] = useFetch('get')
    const [val, setVal] = useState('')
    const [formSubmit] = usePostFetch(setChats)
   

    function updateInput(e){
        const newVal = e.currentTarget.value;
        setVal(newVal)
    }
    
    return (
        <div className="h-screen flex flex-col">
            <div className="bg-gray-200 flex-1 overflow-y-scroll">
                <div className="px-4 py-2">
                    {pending && <span class="loader"></span>}
                    {chats.map(el => <ChatLeft key={el.id} data={el} />)}
                    
                </div>
            </div>
            <div className="bg-gray-100 px-4 py-2">
                <form action={formSubmit}>
                    <div className="flex items-center">
                        <input
                            className="w-full border rounded-full py-2 px-4 mr-2"
                            name="content"
                            type="text"
                            placeholder="Type your message..."
                            value={val}
                            onChange={updateInput}
                        />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}