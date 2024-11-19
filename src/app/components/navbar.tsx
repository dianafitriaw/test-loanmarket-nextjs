import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
    return(
        <div className="w-full h-20 flex flex-row bg-bgcolor shadow-xl justify-between items-center border-b-4">
            <h1 className="font-normal text-5xl text-greytext p-10">Dashboard</h1>
            <div className="flex flex-row p-10 items-center">
                <div className="border-s-4 p-3">
                <IoMdNotificationsOutline className="w-[40px] h-[40px]"/>
                </div>
                <div className="border-x-4 p-3">
                    <form className="max-w-sm mx-auto">
                        <select id="Name" className="text-greytext text-2xl">
                            <option >YOHANES AFANDI</option>
                            <option value="profil">Profil</option>
                            <option value="setting">Setting</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}