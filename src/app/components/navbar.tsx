import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="w-full h-16 md:h-20 flex flex-wrap items-center justify-between bg-bgcolor shadow-xl border-b-4">
      <h1 className="font-normal text-2xl md:text-4xl lg:text-5xl text-greytext px-4 md:px-10">
        Dashboard
      </h1>

      <div className="flex items-center gap-4 px-4 md:px-10">
        <div className="border-s-4 p-2 md:p-3">
          <IoMdNotificationsOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
        <div className="border-x-4 px-3 py-1">
          <form className="max-w-sm">
            <select
              id="Name"
              className="text-base md:text-lg lg:text-2xl text-greytext bg-transparent outline-none"
            >
              <option>YOHANES AFANDI</option>
              <option value="profil">Profil</option>
              <option value="setting">Setting</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
