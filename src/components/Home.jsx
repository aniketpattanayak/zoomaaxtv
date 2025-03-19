import Header from "./Header";
import Movies from "./Movies";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home=()=>{
    return (<>
    <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="pl-24">
    <Header/>
    </div>
    <Navbar/>
    <div className="pl-24">
    <Movies/>
    <Footer/>
    </div>





    </div>
    </>);
}
export default Home;