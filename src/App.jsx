
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import Home from './components/Home';
import AccountCreated from "./components/AccountCreated";
import Movies from "./components/Movies";
import SwiperMovies from "./components/SwiperMovies";
import Promaax from "./components/Promaax";
import SearchPage from "./components/SearchPage";
import DownloadsPage from "./components/DownloadsPage";
import Footer from "./components/Footer";
import Language from "./components/Language";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Promaax" element={<Promaax />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Watchlist" element={<DownloadsPage />} />
        
      </Routes>
      
      
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
