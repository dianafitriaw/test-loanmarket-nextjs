import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";

export default function CardProfil() {
    return(
        <div className="w-full h-[250px] bg-bgcolor flex flex-row">
            <img 
                src="/profil.png"
                alt="foto profil" 
                className="w-[150px] h-[150px] ml-8 my-12"
            />
            <div className="flex flex-col my-12">
                <h1 className="text-4xl font-semibold text-bluee">YOHANES AFFANDI (JOJO)</h1>
                <div className="flex flex-row w-[699px] h-[105px] justify-between m-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="w-[45px] h-[45px]">
                                <HiBuildingOffice2 className="w-[35px] h-[35px] text-bluee bg-bggrey rounded-full"/>
                            </div>
                            <h3 className="font-medium text-xl">Loan Market Office Dev</h3>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[45px] h-[45px]">
                                <PiIdentificationCard className="w-[35px] h-[35px] text-bluee bg-bggrey rounded-full"/>
                            </div>
                            <h3 className="font-medium text-xl">LM9990001</h3>
                        </div>
                    </div>
                    <div className="border-r-2"></div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="w-[45px] h-[45px]">
                                <MdOutlineMail className="w-[35px] h-[35px] text-bluee bg-bggrey rounded-full"/>
                            </div>
                            <h3 className="font-medium text-xl">it@loanmarket.co.id</h3>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[45px] h-[45px]">
                                <IoCallSharp className="w-[35px] h-[35px] text-bluee bg-bggrey rounded-full"/>
                            </div>
                            <h3 className="font-medium text-xl">6281234567890</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}