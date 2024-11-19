import { HiBuildingOffice2 } from "react-icons/hi2";
import CardProfil from "./components/cardprofil";
import Canvas from "./components/chart";
import Chart from "./components/chart";
import { FaRegEdit } from "react-icons/fa";
import CardTopbank from "./components/cardTopBank";
import { PiNewspaperLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import { BsBank2 } from "react-icons/bs";

export default function Home() {
  return (
   <div className="bg-bggrey w-full h-full">
      <CardProfil/>
      <div className="flex flex-col px-4 gap-4">
        <div className="w-fit h-[142px] my-12 flex flex-row justify-center items-center gap-4">
          <div className="h-[140px] bg-bgcolor flex flex-row justify-center items-center">
            <div className="w-fit h-[82px] px-4 flex flex-row justify-center items-center">
              <div className="w-[70px] h-[70px] py-2">
                <HiBuildingOffice2 className="w-[45px] h-[45px] text-bluee bg-bggrey rounded-full"/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">CONTACT</h1>
                <h1 className="font-bold text-4xl text-bluee">51</h1>
              </div>
            </div>
          </div>
          <div className="h-[140px] bg-bgcolor flex flex-row justify-center items-center">
            <div className="w-fit h-[82px] px-4 flex flex-row justify-center items-center">
              <div className="w-[70px] h-[70px] py-2">
                <PiNewspaperLight className="w-[45px] h-[45px] text-bluee bg-bggrey rounded-full"/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">LOAN</h1>
                <h1 className="font-bold text-4xl text-bluee">56</h1>
              </div>
            </div>
          </div>
          <div className="h-[140px] bg-bgcolor flex flex-row justify-center items-center">
            <div className="w-fit h-[82px] px-4 flex flex-row justify-center items-center">
              <div className="w-[70px] h-[70px] py-2">
                <SlBag className="w-[45px] h-[45px] text-bluee bg-bggrey rounded-full"/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">PRODUCT</h1>
                <h1 className="font-bold text-4xl text-bluee">80</h1>
              </div>
            </div>
          </div>
          <div className="h-[140px] bg-bgcolor flex flex-row justify-center items-center">
            <div className="w-fit h-[82px] px-4 flex flex-row justify-center items-center">
              <div className="w-[70px] h-[70px] py-2">
                <BsBank2 className="w-[45px] h-[45px] text-bluee bg-bggrey rounded-full"/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-2xl">BANK</h1>
                <h1 className="font-bold text-4xl text-bluee">30</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-fit h-[396px] bg-bgcolor flex flex-row py-2 gap-4">
            <div className="flex flex-col justify-center items-center gap-4 px-4">
              <h1 className="font-semibold text-3xl ">PINJAMAN DISETUJUI</h1>
              <Chart/>
              <h1 className="font-medium text-xl">2/5 pinjaman telah disetujui</h1>
            </div>
            <div className="border-r-2 "/>
            <div className="flex flex-col justify-center items-center gap-4 px-4">
              <h1 className="font-semibold text-3xl">TARGET</h1>
              <Chart/>
              <h1 className="font-medium text-xl">Rp. 14.000.000.000,00 /5.000.000.000 </h1>
            </div>
            <div >
            <FaRegEdit className="w-[50px] h-[50px] text-bluee"/>
            </div>
        </div>
        <CardTopbank/>
      </div>
   </div>
  );
}
