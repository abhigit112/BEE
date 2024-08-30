import { Input,Image } from "antd"

const Navbar = ()=>{
    return(
        <>
            <div className=" 
            w-[100%] flex flex-row justify-between items-center mt-5 py-2">
                <p
                className="ml-6 text-3xl"
                ><span
                className="font-bold text-[#299D91]"
                >fine</span>Cards.<span
                className="font-bold text-[#299D91]"
                >IO</span></p>
                    <ul className="w-1/6 flex flex-row justify-between ">
                        <li
                        className="font-bold"
                        >Home</li>
                        <li
                        className="font-bold"
                        >Contact</li>
                        <li
                        className="font-bold"
                        >About US</li>
                    </ul>
                <div >
                   <Input 
                   className="px-5 mx-8"
                   placeholder="search here"/>
                </div>
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