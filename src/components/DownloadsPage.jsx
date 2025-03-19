import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialVideos = [
  {
    id: 1,
    title: "RRR",
    duration: "2h 57m",
    language: "Telugu",
    categories: ["Action", "Drama", "Historical"],
    thumbnail: "https://i.ytimg.com/vi/xhIEWFbkhZs/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Baahubali",
    duration: "2h 45m",
    language: "Telugu",
    categories: ["Action", "Adventure", "Fantasy"],
    thumbnail: "https://peachmode.com/cdn/shop/articles/bahubali-inspired-ethnics-for-your-traditional-closet-peachmode.jpg?v=1668999039&width=1024",
  },
  {
    id: 3,
    title: "Pushpa",
    duration: "2h 55m",
    language: "Telugu",
    categories: ["Action", "Thriller", "Crime"],
    thumbnail: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/11/file-image-2024-11-25t115712-1732518928.jpg",
  },
];

const DownloadsPage = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState(initialVideos);

  // Function to remove video from the list
  const removeVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <button onClick={() => navigate(-1)} className="text-2xl hover:cursor-pointer">
          ←
        </button>
        <h1 className="text-2xl font-[Gilroy-ExtraBold]">Watchlist</h1>
      </div>

      {/* Video List */}
      <div className="space-y-4">
        {videos.length === 0 ? (
          <p className="text-center text-gray-400">No videos in your watchlist.</p>
        ) : (
          videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center bg-gray-800 p-4 rounded-xl shadow-md"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-32 h-20 object-cover rounded-lg"
              />

              {/* Video Details */}
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-bold">{video.title}</h2>
                <p className="text-gray-300">{video.duration}</p>
                <p className="text-gray-300">{video.language}</p>
                <p className="text-white font-semibold">
                  {video.categories.join(" | ")}
                </p>
              </div>

              {/* Bookmark Icon */}
              <button
                onClick={() => removeVideo(video.id)}
                className="text-2xl text-gray-300 hover:text-[#37A6C9] cursor-pointer transition"
              >
                <i className="ri-bookmark-fill"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DownloadsPage;
