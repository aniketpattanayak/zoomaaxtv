import React, { useState } from "react";


const moviesData = [
  {
    id: "1",
    title: "Home Game",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvN10aZWgxw8H80zGBWZ0MCTqLPKJt8DJFg&s",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Home Game",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvN10aZWgxw8H80zGBWZ0MCTqLPKJt8DJFg&s",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Home Game",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvN10aZWgxw8H80zGBWZ0MCTqLPKJt8DJFg&s",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Home Game",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvN10aZWgxw8H80zGBWZ0MCTqLPKJt8DJFg&s",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Home Game",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvN10aZWgxw8H80zGBWZ0MCTqLPKJt8DJFg&s",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Breaking News",
    category: "News",
    thumbnail:
      "https://images.indianexpress.com/2025/02/modi-trumpmeeting.jpg?w=475",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Breaking News",
    category: "News",
    thumbnail:
      "https://images.indianexpress.com/2025/02/modi-trumpmeeting.jpg?w=475",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Breaking News",
    category: "News",
    thumbnail:
      "https://images.indianexpress.com/2025/02/modi-trumpmeeting.jpg?w=475",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Breaking News",
    category: "News",
    thumbnail:
      "https://images.indianexpress.com/2025/02/modi-trumpmeeting.jpg?w=475",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Breaking News",
    category: "News",
    thumbnail:
      "https://images.indianexpress.com/2025/02/modi-trumpmeeting.jpg?w=475",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Breaking News",
    category: "News",
    thumbnail:
      "https://images.indianexpress.com/2025/02/modi-trumpmeeting.jpg?w=475",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "1",
    title: "Home Game",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvN10aZWgxw8H80zGBWZ0MCTqLPKJt8DJFg&s",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "2",
    title: "Inception",
    category: "Movies",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "3",
    title: "Inception",
    category: "Movies",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "4",
    title: "Inception",
    category: "Movies",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "5",
    title: "Inception",
    category: "Movies",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "6",
    title: "Inception",
    category: "Movies",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "8",
    title: "The Dark Knight",
    category: "Movies",
    thumbnail: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
    videoUrl: "https://example.com/dark_knight.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Web Series",
    thumbnail:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-66810,resizemode-75,msid-118182993/magazines/panache/stranger-things-season-5-release-date-episodes-cast-and-plot-everything-you-need-to-know-about-the-epic-finale/stranger-things-season-5.jpg",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  {
    id: "7",
    title: "Stranger Things",
    category: "Serials",
    thumbnail:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVAM68frUrCClH_mIMMCqh_AUIgL8dkyqp0XCD6rVLMMQlj3B6QYUfGT0oxvRcv-EE7vHtE-I4-eA8nttqO5WMiqJe0mPTszTf6Y.jpg?r=e87",
    videoUrl: "https://example.com/full_series.mp4",
  },
  
];

const categories = ["Movies", "Web Series", "Serials","Sports","News"];

const Movies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black min-h-screen p-5">
      {categories.map((category) => {
        const filteredMovies = moviesData.filter(
          (movie) => movie.category === category
        );

        return (
          filteredMovies.length > 0 && (
            <div key={category} className="mb-6 relative">
              
              {/* Category Title & See All */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white hover: cursor-pointer">{category}</h2>
                <div className="group hover:text-white">
  <a href="#" className="text-[#A0A0A1] text-sm group-hover:text-white flex items-center">
    Show More
    <i className="ri-arrow-right-s-line text-[#A0A0A1] text-xl group-hover:text-white"></i>
  </a>
</div>

              </div>

              {/* Movie Cards */}
              <div
                className="flex overflow-x-auto space-x-4 p-2 no-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft;
                  const cardWidth = e.target.firstChild?.offsetWidth || 1;
                  setActiveIndex(Math.floor(scrollLeft / cardWidth));
                }}
              >
                {filteredMovies.map((movie) => (
                    <a
                    href={movie.videoUrl}
                    className="flex items-center gap-2 text-blue-500 hover:cursor-pointer text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <div
                    key={movie.id}
                    className="bg-black p-0 rounded-lg w-64 flex-shrink-0"
                  >

                    <img
                      src={movie.thumbnail}
                      alt={movie.title}
                      className="w-full h-40 object-cover rounded-md hover:cursor-pointer"
                    />

                    <div className="mt-2 flex space-x-2">
                    
                        <h3 className="text-white text-lg font-semibold">
                          {movie.title}
                        </h3>
                        <i className="ri-play-large-fill text-white text-l"></i>
                      
                    </div>
                  </div>
                  </a>
                ))}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Movies;
