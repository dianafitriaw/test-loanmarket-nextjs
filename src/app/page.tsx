import { HiBuildingOffice2 } from "react-icons/hi2";
import CardProfil from "./components/cardprofil";
import Chart from "./components/chart";
import { FaRegEdit } from "react-icons/fa";
import { PiNewspaperLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import { BsBank2 } from "react-icons/bs";
import CardTopbank from "./components/cardtopbank";
import React from "react";

export default function Home() {
  return (
    <div className="bg-bggrey w-full min-h-screen">
      <CardProfil />
      <div className="flex flex-col px-4 gap-6">
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-12 justify-items-center">
          {[
            { icon: <HiBuildingOffice2 />, label: "CONTACT", value: "51" },
            { icon: <PiNewspaperLight />, label: "LOAN", value: "56" },
            { icon: <SlBag />, label: "PRODUCT", value: "80" },
            { icon: <BsBank2 />, label: "BANK", value: "30" },
          ].map(({ icon, label, value }, index) => (
            <div
              key={index}
              className="w-[180px] h-[140px] bg-bgcolor flex flex-col items-center justify-center gap-2 p-4 shadow-md rounded-lg"
            >
              <div className="flex flex-row">
                <div className="w-[70px] h-[70px] flex items-center justify-center bg-bggrey rounded-full">
                  {React.cloneElement(icon, {
                    className: "w-[45px] h-[45px] text-bluee",
                  })}
                </div>
                <div className="text-center flex flex-col">
                  <h1 className="font-semibold text-xl">{label}</h1>
                  <h1 className="font-bold text-3xl text-bluee">{value}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Chart Section */}
        <div className="flex flex-wrap bg-bgcolor rounded-lg shadow-md py-6 px-4 gap-6">
          <div className="flex-1 flex flex-col items-center gap-4">
            <h1 className="font-semibold text-xl sm:text-2xl text-center">
              PINJAMAN DISETUJUI
            </h1>
            <Chart />
            <h1 className="font-medium text-sm sm:text-lg text-center">
              2/5 pinjaman telah disetujui
            </h1>
          </div>
          <div className="hidden sm:block border-r-2"></div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <h1 className="font-semibold text-xl sm:text-2xl text-center">
              TARGET
            </h1>
            <Chart />
            <h1 className="font-medium text-sm sm:text-lg text-center">
              Rp. 14.000.000.000,00 / 5.000.000.000
            </h1>
          </div>
        </div>
        <CardTopbank />
      </div>
    </div>
  );
}
