import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { Input } from "antd";
import { Button } from "antd";




const Footer= ()=>{
    return(
        <>
            <div
            className="w-[100%] bg-[#299D91]"
            >
            <div 
            className="flex flex-row justify-around mt-10"
            >
                <div
                className="w-1/4 text-lg  my-16"
                >
                        <p
                        className="text-xl font-bold mb-3"
                        >Contact Us</p>
                        <div
                        className=" flex flex-row  items-center ml-3 mb-5 "
                        >
                        <CiMail />
                        <p
                        className="ml-3 text-2xl"
                        >info@abhitech.com</p>
                        </div>
                        <div
                        className="flex flex-row items-center ml-3 mb-5"
                        >
                        <FaLocationDot/>
                        <p
                        className="ml-3 text-2xl"
                        >Chitkara University</p>
                        </div>
                        <div
                        className="flex flex-row items-center ml-3 mb-5"
                        >
                        <FaPhone />
                        <p
                        className="ml-3 text-2xl"
                        >9367256789</p>
                        </div>
                    </div>

                    <div 
                    className="w-1/4 my-16  flex items-center flex-col"
                    >
                        <Input placeholder="name"
                            className="mb-2 py-4"
                        />
                        <Input 
                            className="mb-2 py-9"
                        placeholder="Email"/>
                        <Input 
                            className="mb-2 py-4"
                        placeholder="Phone"/>
                        <Button 
                        // className="bg-slate-500 border-none"
                        >Submit</Button>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Footer;