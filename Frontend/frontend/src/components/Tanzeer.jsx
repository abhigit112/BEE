import Navbar from "./Navbar";
import PhotoIntro from "./PhotoIntro";
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
           
                <div
                className="w-[100%] bg-[#299D91] text-white font-semibold my-6 flex justify-center"
                >Our Services</div>
            <Carousels/>
            <div>
            <Footer/>
            </div>

        </>
    )
}

export default Tanzeer;