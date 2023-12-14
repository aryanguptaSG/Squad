import MenuIcon from "@/assets/icons/Menu.svg"
import Logo from "@/../public/logo.svg"
import Bell from "@/assets/icons/Bell.svg"
import SearchAcrossPlatform from "../common/SearchAcrossPlatform";
import ProfileImage from "../common/ProfileImage";
import { ThemeToggle } from "../ThemeToggle";

function Navbar() {
  return (
    <div className="bg-primaryBlack h-[60px] w-full text-white fixed z-50 flex justify-between items-center">
        <div className="pl-[10px] flex items-center">
            <div className="hover:bg-[#606060] hover:rounded-md p-1 cursor-pointer h-fit">
                <img width={24} height={24} src={MenuIcon} alt="" />
            </div>
            <div className="flex items-center space-x-2 ml-10">
                <img width={40} height={40} src={Logo} alt="" />
                <p className="text-[20px] font-bold text-white">Golu Space</p>
            </div>
            <SearchAcrossPlatform/>
        </div>
        <div className="pr-10 flex space-x-5 items-center">
            <ThemeToggle/>
            <img width={24} height={24} src={Bell} alt="" />
            <ProfileImage src="" fallback="AG"/>
        </div>
    </div>
  )
}

export default Navbar;