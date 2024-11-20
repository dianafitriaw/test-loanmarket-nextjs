import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";

export default function CardProfil() {
    return (
      <div className="w-full bg-bgcolor flex flex-wrap items-center p-6 md:p-8">
        {/* Profil Picture */}
        <img
          src="/profil.png"
          alt="foto profil"
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full mr-4 md:mr-8"
        />
  
        {/* Profil Details */}
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl md:text-4xl font-semibold text-bluee mb-4">
            YOHANES AFFANDI (JOJO)
          </h1>
  
          {/* Profil Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Left Info */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <HiBuildingOffice2 className="w-8 h-8 text-bluee bg-bggrey rounded-full mr-3" />
                <h3 className="font-medium text-lg md:text-xl">
                  Loan Market Office Dev
                </h3>
              </div>
              <div className="flex items-center">
                <PiIdentificationCard className="w-8 h-8 text-bluee bg-bggrey rounded-full mr-3" />
                <h3 className="font-medium text-lg md:text-xl">LM9990001</h3>
              </div>
            </div>
  
            {/* Right Info */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <MdOutlineMail className="w-8 h-8 text-bluee bg-bggrey rounded-full mr-3" />
                <h3 className="font-medium text-lg md:text-xl">
                  it@loanmarket.co.id
                </h3>
              </div>
              <div className="flex items-center">
                <IoCallSharp className="w-8 h-8 text-bluee bg-bggrey rounded-full mr-3" />
                <h3 className="font-medium text-lg md:text-xl">6281234567890</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  