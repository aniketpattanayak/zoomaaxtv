import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate();
    const openPromaaxInNewTab=()=>{
        window.open("/Promaax", "_blank");
    };
    return (
        <>
            <div className="flex justify-between items-center px-8 py-4">
                {/* Left side - Logo & Title */}
                <div className="flex items-center space-x-4">
                    {/* <img src="/ZTV_Logo.png" className="w-[105px] h-[105px]" /> */}
                    {/* <h1 className="text-white font-[Gilroy-ExtraBold] text-2xl hover:underline cursor-pointer">
                        ZOOMAAX TV
                    </h1> */}
                </div>

                {/* Right side - Promaax heading & image */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-white font-[Gilroy-ExtraBold] text-2xl hover:cursor-pointer" onClick={openPromaaxInNewTab}>
                        Promaax
                    </h1>
                    <img src="Promaax.png" className="h-10 w-10 rounded-lg hover: cursor-pointer" onClick={openPromaaxInNewTab} />
                </div>
            </div>
        </>
    );
};

export default Header;
