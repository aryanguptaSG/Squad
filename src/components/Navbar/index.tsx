import MenuIcon from "@/assets/icons/Menu.svg"
import Logo from "@/../public/logo.svg"
import Bell from "@/assets/icons/Bell.svg"
import DropDown from "../common/DropDown";
import SearchAcrossPlatform from "../common/SearchAcrossPlatform";
import ProfileImage from "../common/ProfileImage";
import { ThemeToggle } from "../ThemeToggle";
import { workSpace } from "@/Context/Signals";
import { sideBarExpanded } from "@/Context/Signals";

function Navbar() {
  return (
    <div className="bg-primaryBlack h-[60px] w-full text-white fixed z-50 flex justify-between items-center">
        <div className="pl-[10px] flex items-center">
            <div className="hover:bg-[#606060] hover:rounded-md p-1 cursor-pointer h-fit" onClick={()=>{sideBarExpanded.value = !sideBarExpanded.value}}>
                <img width={24} height={24} src={MenuIcon} alt="" />
            </div>
            <div className="flex items-center space-x-2 ml-10">
                <img width={40} height={40} src={Logo} alt="" />
                <p className="text-[20px] font-bold text-white font-Montaga">Squad</p>
            </div>
            <SearchAcrossPlatform/>
        </div>
        <div className="pr-10 flex space-x-5 items-center">
            <DropDown showdownIcon={true} className="rounded-md" titleClassName="text-[#4285F4] hover:bg-[#303030] font-semibold text-sm cursor-pointer  px-5 py-[5px] rounded-md font-Montserrat" value={workSpace.value} setValue={(newVal:string)=>{workSpace.value=newVal}} optionList={["Golu School","Shiva Ji Inter Collage"]} />
            <ThemeToggle/>
            <img width={24} height={24} src={Bell} alt="" />
            <ProfileImage src="" fallback="AG" dropdown={true}/>
        </div>
    </div>
  )
}

export default Navbar;