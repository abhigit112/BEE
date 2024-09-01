import { Input,Image } from "antd"
import { IoFastFoodOutline } from "react-icons/io5";

import { MdOutlineMenuBook } from "react-icons/md";


const Navbar = ()=>{
    return(
        <>
            <div className=" 
            w-full p-5 flex flex-row justify-between items-center ">
                <p
                className="ml-6 text-3xl text-gray-200"
                ><span
                className="font-bold text-[#299D91]"
                >fine</span>Cards.<span
                className="font-bold text-[#299D91]"
                >IO</span></p>
            <div
            className="flex flex-row justify-center items-center"
            >
                <a
                className="flex flex-row justify-center items-center border border-gray-400 p-2 mr-2"
                href="https://finecards.netlify.app">
                    <button
                    className="cursor-pointer"
                    >
                        <IoFastFoodOutline  
                            className="text-gray-400 size-12 mr-5"
                        />
                    </button>
                <p
                className="text-gray-200 font-bold text-lg mr-6"
                >Mess-Menu</p>
                </a>


                <a
                className="flex flex-row justify-center items-center border border-gray-400 p-2"
                href="/messcard">
                    <button
                    className="cursor-pointer"
                    >
                        <IoFastFoodOutline  
                            className="text-gray-400 size-12 mr-5"
                        />
                    </button>
                <p
                className="text-gray-200 font-bold text-lg mr-6"
                >MessCard</p>
                </a>

               
            </div>
                {/* <div > */}
                   {/* <Input 
                   className="px-5 mx-8"
                   placeholder="search here"/> */}
                   {/* <ul
                   className="flex flex-row">
                    <li
                    className="ml-4"
                    >Home</li>
                    <li
                    className="ml-4"
                    >About Us</li>
                    <li
                    className="ml-4"
                    >Contact Us</li>
                   </ul> */}
                {/* </div> */}
                <div className="flex flex-row mr-6 justify-between items-center">
                    <Image
                    className="rounded-3xl"
                    width={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        {/* <p>⬇</p> */}
                </div>
            </div>
        </>
    )
}

export default Navbar;