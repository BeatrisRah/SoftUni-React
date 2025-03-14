export default function ChatLeft({data: {author, content}}) {
   return (
    <>
    <div className="flex items-center mb-2">
        <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://picsum.photos/50/50"
            alt="User Avatar"
        />
        <div className="font-medium">{author}</div>
    </div>
    <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
        {content}
    </div>
    </>
   );
}