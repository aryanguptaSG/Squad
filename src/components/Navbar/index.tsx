import MenuIcon from "@/assets/icons/Menu.tsx";
import Logo from "@/../public/logo_1.svg";
import Bell from "@/assets/icons/Bell.tsx";
import DropDown from "../common/DropDown";
import SearchAcrossPlatform from "../common/SearchAcrossPlatform";
import ProfileImage from "../common/ProfileImage";
import { ThemeToggle } from "../ThemeToggle";
import { workSpace } from "@/Context/Signals";
import { sideBarExpanded } from "@/Context/Signals";
import { useTheme } from "@/Context/ThemeProvider";
import { useAuth } from "@/Context/AuthProvider";
import { allWorkspaces } from "@/Context/Signals";

function Navbar() {
  const { theme } = useTheme();
  const { auth } = useAuth();
  return (
    <div className="bg-white dark:bg-black h-[60px] w-full text-white fixed z-50 flex justify-between items-center">
      <div className="pl-[10px] flex items-center">
        <div
          className="hover:bg-Gray-light-gray dark:hover:bg-Black-hoverBlack hover:rounded-md p-1 cursor-pointer w-fit h-fit"
          onClick={() => {
            sideBarExpanded.value = !sideBarExpanded.value;
          }}
        >
          <MenuIcon color={theme == "light" ? "#1a1a1a" : "#cccccc"} />
        </div>
        <div className="flex items-center space-x-2 ml-10">
          <img width={150} height={100} src={Logo} alt="" />
        </div>
        <SearchAcrossPlatform />
      </div>
      <div className="pr-10 flex space-x-5 items-center">
        <DropDown
          showdownIcon={true}
          className="rounded-md "
          titleClassName="text-[#4285F4] hover:bg-Gray-light-gray dark:hover:bg-Black-hoverBlack font-semibold text-sm cursor-pointer  px-5 py-[5px] rounded-md font-Montserrat"
          value={workSpace.value}
          setValue={(newVal: string) => {
            workSpace.value = newVal;
          }}
          optionList={allWorkspaces.value.map((item: any) => item.name)}
        />
        <ThemeToggle
          bgClassName="bg-white dark:bg-black hover:bg-Gray-light-gray dark:hover:bg-Gray-dark-gray"
          sunClassName="text-Gray-dark-gray"
        />
        <Bell color={theme == "light" ? "#aaa" : "#cccccc"} />
        <ProfileImage
          src={auth.user.profilePic}
          fallback="AG"
          dropdown={true}
        />
      </div>
    </div>
  );
}

export default Navbar;

// 9353891277;
