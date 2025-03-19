const Footer = () => {
    return (
      <>
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            {/* Left Section - Company Info */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg text-white">Company</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-3">
              <i class="ri-copyright-line text-white"></i> 2025 Zoomster Hub OPC Pvt Ltd <br />
                All Rights Reserved.
              </p>
            </div>
  
            {/* Right Section - Social Links & App Download */}
            <div className="mt-6 md:mt-0 text-center md:text-right">
              {/* Social Icons */}
              <h3 className="font-semibold text-lg">Connect with Us</h3>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
                >
                  <i className="ri-instagram-fill text-white text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
                >
                  <i className="ri-facebook-box-fill text-white text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
                >
                  <i className="ri-linkedin-box-fill text-white text-2xl"></i>
                </a>
              </div>
  
              {/* Download Links */}
              <h3 className="font-semibold text-lg mt-4">Download it in</h3>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
                >
                  <i className="ri-google-play-fill text-white text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
                >
                  <i className="ri-apple-fill text-white text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  