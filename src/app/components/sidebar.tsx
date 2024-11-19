import { BsBank2 } from "react-icons/bs";
import { FaQuestionCircle, FaWhatsapp } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { LiaHomeSolid } from "react-icons/lia";
import { PiNewspaperLight } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
import { SlBag } from "react-icons/sl";
import { TbFileSettings, TbScoreboard } from "react-icons/tb";

export default function Sidebar() {
    return(
        <div className="w-[270px] h-fit bg-bgcolor text-black flex flex-col items-center shadow-xl border-2">
            <img
                src="/loanmarket.png"
                alt="icon"
                className="w-[110px] h-[110px]"
            />

            {/* Menu Item */}
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee mt-10 mb-2 rounded-lg transition-colors duration-300">
                <LiaHomeSolid
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-xl text-start">
                Dashboard
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee  my-2 rounded-lg transition-colors duration-300">
                <GrContactInfo
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-start text-xl">
                Contact
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee  my-2 rounded-lg transition-colors duration-300">
                <PiNewspaperLight
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-start text-xl">
                Loan
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee  my-2 rounded-lg transition-colors duration-300">
                <SlBag
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-start text-xl">
                Product 
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <BsBank2
                className="w-[35px] h-[35px] ml-4  group-hover:text-white"
                />
                <button className="ml-4 font-medium text-start text-xl">
                Bank
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center  bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <TbScoreboard
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-start text-xl ">
                Credit Scoring 
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center  bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <FaQuestionCircle
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-xl text-start ">
                FAQ'S
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <RiStackLine
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-xl text-start ">
                Pipeline 
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <RiStackLine
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-xl text-start ">
                Pipeline Developer
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <TbFileSettings
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-xl ">
                Marketing Tools
                </button>
            </div>
            <div className="w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300">
                <FaWhatsapp
                className="w-[35px] h-[35px] ml-4 group-hover:text-white"
                />
                <button className="ml-4 font-medium text-xl ">
                Whatsapp
                </button>
            </div>
        </div>
    )
}


