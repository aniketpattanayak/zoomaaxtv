import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SwiperMovies from "./SwiperMovies";
import Language from "./Language";

const Navbar = () => {
  const navigate = useNavigate();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const modalRef = useRef(null);  // Reference for the modal content

  // Close modal when clicking outside of the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLanguageModal(false);  // Close the modal
      }
    };

    if (showLanguageModal) {
      // Listen for clicks outside the modal when it is open
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Clean up event listener when the modal is closed
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showLanguageModal]);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-24 bg-black bg-opacity-100 backdrop-blur-md flex flex-col items-center py-4 z-50 transition-all duration-300 hover:bg-opacity-70 hover:shadow-2xl hover:shadow-gray-900/50">
        
        {/* Logo */}
        <img
          src="/ZTV_Logo.png"
          className="w-[80px] h-[80px] mb-6 cursor-pointer"
          onClick={() => console.log("Home Clicked")} // No navigation
        />

        {/* Icons List */}
        <div className="relative flex flex-col items-start space-y-8 h-full justify-center group">
          {[
            { icon: "ri-home-4-fill", label: "Home", route: "/"  },
            { icon: "ri-search-line", label: "Search" ,route: "/search"},
            { icon: "ri-bookmark-fill", label: "Watchlist",route: "/Watchlist" },
            { icon: "ri-global-line", label: "Languages", action: () => setShowLanguageModal(true) ,route: "/languages"}, // Open Modal
            { icon: "ri-account-circle-fill", label: "Profile", route: "/profile"  },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex items-center space-x-4 w-full cursor-pointer group-hover:bg-opacity-80"
              onClick={item.action || (() => navigate(item.route))}
            >
              <i className={`${item.icon} text-white text-3xl`}></i>
              <span className="absolute left-full text-white text-lg bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 flex flex-1">
        {/* <SwiperMovies /> */}
      </div>

      {/* Language Popup */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50">
          <div
            ref={modalRef} // Attach the ref to the modal content
            className="p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
          >
            <Language />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
