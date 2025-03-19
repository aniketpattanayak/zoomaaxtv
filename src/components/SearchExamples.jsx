import { useState } from "react";

const moviesData = [
  {
    id: "8",
    title: "Guntur Karam",
    category: "News",
    thumbnail:
      "https://i.ytimg.com/vi/xhIEWFbkhZs/maxresdefault.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
  {
    id: "1",
    title: "RRR",
    category: "Sports",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbTLamzeyzONNKqTZbVlk7ONDFVuYRfdw_Re-xxRpKkmpm_UHisy-V_xKl8gQ8xmFQeo&usqp=CAU",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
  {
    id: "2",
    title: "Gaddalakonda Ganesh",
    category: "Movies",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDHFnERI_osfbJfI37yaIIBWxy31I2H5u3tbY4pOjdfRtbnKsXOENvoVOXwwqVdr3QpPTH",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
  {
    id: "3",
    title: "Pokiri",
    category: "Movies",
    thumbnail:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9150/1369150-i-94407db9c24d",
    videoUrl: "https://example.com/dark_knight.mp4",
    time:"2h 30min"
  },
  {
    id: "4",
    title: "Athadu",
    category: "Web Series",
    thumbnail:
      "https://cinemachaat.com/wp-content/uploads/2010/09/athadu.jpg",
    videoUrl: "https://example.com/full_series.mp4",
    time:"2h 30min"
  },
  {
    id: "5",
    title: "Dookudu",
    category: "News",
    thumbnail:
      "https://i0.wp.com/cinecompass.in/wp-content/uploads/2023/09/Dukudu_M16.jpg?fit=1024%2C482&ssl=1",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
  {
    id: "6",
    title: "Maharshi",
    category: "News",
    thumbnail:
      "https://assets.thehansindia.com/h-upload/feeds/2019/05/07/172034-maharshi1.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
  {
    id: "7",
    title: "1 Nenokkadine",
    category: "News",
    thumbnail:
      "https://i.ytimg.com/vi/oLYzIvN_1zg/maxresdefault.jpg",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
  {
    id: "9",
    title: "Srimanthudu",
    category: "News",
    thumbnail:
      "https://static.toiimg.com/photo/msid-48404863/48404863.jpg?61986",
    videoUrl: "https://example.com/full_movie.mp4",
    time:"2h 30min"
  },
];

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-black  rounded-lg shadow-md hover:scale-105 transition-transform w-80 h-[20rem]">
      <div className="w-full h-50">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-full object-cover rounded-lg hover:cursor-pointer"
        />
      </div>
      <h2 className="text-lg font-bold mt-2 hover:cursor-pointer text-white">{movie.title}</h2>
    
      <a
        href={movie.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-sm block"
      >
        {movie.time}
      </a>
    </div>
  );
};

const SearchExamples = ({ query }) => {
  // Filter movies based on search query
  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center p-6">
      {/* Movie Flex Layout */}
      <div className="flex flex-wrap  gap-3 ">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-center text-gray-400 w-full">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default SearchExamples;
