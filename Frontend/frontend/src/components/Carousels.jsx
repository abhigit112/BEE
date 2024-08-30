import { Carousel } from "antd"
import {Button} from "antd";
// import Slider from "react-slick";


const Carousels = ()=>{

    return(
        <>
            <div
            className="w-fit flex flex-row"
            >

            <div
            className="p-7 bg-slate-300 mx-1 shadow-xl"
            >
                <Carousel arrows autoplay
                className="w-[330px] p-6 ml-6"
                >
                    <Button
                        className="bg-[#299D91] text-white"
                    >Reject A MEAL</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    >Reject A MEAL</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >Reject A MEAL</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >Reject A MEAL</Button>
                </Carousel>
            </div>


            <div
            className="p-7 bg-slate-300 mx-1 shadow-xl"
            >
                <Carousel arrows autoplay
                className="w-[330px] p-6 ml-6"
                >
                    <Button
                        className="bg-[#299D91] text-white"
                    >In-Room Service</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >In-Room Service</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >In-Room Service</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >In-Room Service</Button>
                </Carousel>
            </div>

            <div
            className="p-7 bg-slate-300 mx-1 shadow-xl"
            >
                <Carousel arrows autoplay
                className="w-[330px] p-6 ml-6"
                >
                    <Button
                        className="bg-[#299D91] text-white"
                    >Fine/Activity</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >Fine/Activity</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >Fine/Activity</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >Fine/Activity</Button>
                </Carousel>
            </div>
            <div
            className="p-7 bg-slate-300 mx-1 shadow-xl"
            >
                <Carousel arrows autoplay
                className="w-[330px] p-6 ml-6 "
                    >
                    <Button
                        className="bg-[#299D91] text-white"
                    >Complaint/Suggestion</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    
                    >Complaint/Suggestion</Button>
                    <Button
                    className="bg-[#299D91] text-white">
                    Complaint/Suggestion</Button>
                    <Button
                    className="bg-[#299D91] text-white"
                    >Complaint/Suggestion</Button>
                </Carousel>
            </div>
            </div>
        </>
    )
}

export default Carousels;