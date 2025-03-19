import { useNavigate } from "react-router-dom";

const Promaax = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-[Gilroy-ExtraBold] mb-4">Promaax</h1>
            <img src="Promaax_c.png" className="w-40 h-40 rounded-lg mb-4" alt="Promaax Logo" />
            <p className="text-lg mb-2">Connect with People here</p>
            <p className="text-lg mb-4">Explore things by sharing your moments in Promaax</p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition"
            >
                Back to Zoomaax TV
            </button>
        </div>
    );
};

export default Promaax;
