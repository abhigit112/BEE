import Navbar from "./Navbar";
import PhotoIntro from "./PhotoIntro";
import { Button } from "antd";
import Carousels from "./Carousels";
import Footer from "./Footer";


const Tanzeer = ()=>{
    return(
        <>
            <div className="">
                <Navbar/>
            </div>
            <div className="w-[100%] ">
            <PhotoIntro/>
            </div>
            <div>
                <Button
                className="w-[100%] bg-[#299D91] text-white font-semibold my-6"
                >Our Services</Button>
            </div>
            <Carousels/>
            <div>
            <Footer/>
            </div>

        </>
    )
}

export default Tanzeer;