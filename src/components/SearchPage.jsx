import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchExamples from "./SearchExamples";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate(); // For back navigation

    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Header Section */}
            <div className="flex items-center space-x-4 mb-6">
                {/* Back Icon */}
                <i 
                    className="ri-arrow-left-line text-white text-3xl cursor-pointer"
                    onClick={() => navigate(-1)} // Navigate back
                ></i>

                {/* Search Input */}
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 w-full">
                    <i className="ri-search-line text-gray-400 text-xl"></i>
                    <input
                        type="text"
                        placeholder="Search Movies, Series, News, Serials and More"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-transparent outline-none text-white placeholder-gray-400 w-full px-3"
                    />
                </div>
            </div>

            {/* Search Results */}
            <SearchExamples query={query} />
        </div>
    );
};

export default SearchPage;
