import React from "react";
import { BsBank2 } from "react-icons/bs";
import { FaQuestionCircle, FaWhatsapp } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { LiaHomeSolid } from "react-icons/lia";
import { PiNewspaperLight } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
import { SlBag } from "react-icons/sl";
import { TbFileSettings, TbScoreboard } from "react-icons/tb";

export default function Sidebar() {
    return (
      <div className="w-full sm:w-[270px] h-screen bg-bgcolor text-black flex flex-col items-center shadow-xl border-2">
        <img
          src="/loanmarket.png"
          alt="icon"
          className="w-[110px] h-[110px] "
        />
  
        {/* Menu Item */}
        {[
          { icon: <LiaHomeSolid />, label: "Dashboard" },
          { icon: <GrContactInfo />, label: "Contact" },
          { icon: <PiNewspaperLight />, label: "Loan" },
          { icon: <SlBag />, label: "Product" },
          { icon: <BsBank2 />, label: "Bank" },
          { icon: <TbScoreboard />, label: "Credit Scoring" },
          { icon: <FaQuestionCircle />, label: "FAQ'S" },
          { icon: <RiStackLine />, label: "Pipeline" },
          { icon: <RiStackLine />, label: "Pipeline Developer" },
          { icon: <TbFileSettings />, label: "Marketing Tools" },
          { icon: <FaWhatsapp />, label: "Whatsapp" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[250px] h-12 flex items-center bg-bgcolor hover:text-white hover:bg-bluee my-2 rounded-lg transition-colors duration-300"
          >
            {React.cloneElement(item.icon, {
              className: "w-[35px] h-[35px] ml-4",
            })}
            <button className="ml-4 font-medium text-start text-xl truncate">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    );
  }
  


