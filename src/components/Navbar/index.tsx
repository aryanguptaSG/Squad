import MenuIcon from "@/assets/icons/Menu.tsx";
import Logo from "@/../public/logo_1.svg";
import Bell from "@/assets/icons/Bell.tsx";
import DropDown from "../common/DropDown";
import SearchAcrossPlatform from "../common/SearchAcrossPlatform";
import ProfileImage from "../common/ProfileImage";
import { ThemeToggle } from "../ThemeToggle";
import { workSpace, workSpaceId } from "@/Context/Signals";
import { sideBarExpanded } from "@/Context/Signals";
import { useAuth } from "@/Context/AuthProvider";
import { allWorkspaces } from "@/Context/Signals";

function Navbar() {
  const { auth } = useAuth();
  return (
    <div className="bg-black h-[60px] w-full text-white fixed z-50 flex justify-between items-center">
      <div className="pl-[10px] flex items-center">
        <div
          className="hover:bg-Black-hoverBlack hover:rounded-md p-1 cursor-pointer w-fit h-fit"
          onClick={() => {
            sideBarExpanded.value = !sideBarExpanded.value;
          }}
        >
          <MenuIcon color={"#cccccc"} />
        </div>
        <div className="flex items-center space-x-2 ml-10">
          <img width={100} height={100} src={Logo} alt="" />
        </div>
        <div className="hidden md:block">
          <SearchAcrossPlatform />
        </div>
      </div>
      <div className="pr-10 flex space-x-5 items-center">
        <div className="space-x-5 items-center hidden md:flex">
          <DropDown
            showdownIcon={true}
            className="rounded-md"
            titleClassName="text-[#4285F4] hover:bg-Gray-light-gray dark:hover:bg-Black-hoverBlack font-semibold text-sm cursor-pointer  px-5 py-[5px] rounded-md font-Montserrat"
            value={workSpace.value ? workSpace.value.workspace.name : "Global"}
            setValue={(newVal: string) => {
              if (newVal == "Global") {
                workSpaceId.value = "GLOBAL";
                workSpace.value = null;
                return;
              }
              let filtered = allWorkspaces.value.filter(
                (item: any) => item.workspace.name == newVal
              )[0];
              workSpaceId.value = filtered.workspaceId;
              workSpace.value = filtered;
            }}
            optionList={(function () {
              let optionsList = allWorkspaces.value.map(
                (item: any) => item.workspace.name
              );
              optionsList.push("Global");
              return optionsList;
            })()}
          />
          <ThemeToggle bgClassName="bg-black hover:bg-Gray-dark-gray" />
          <div className="cursor-pointer">
            <Bell color={"#cccccc"} />
          </div>
        </div>
        <ProfileImage
          src={auth.user ? auth.user.profilePic : ""}
          fallback={auth.user ? auth.user.email[0] : "AG"}
          dropdown={true}
        />
      </div>
    </div>
  );
}

export default Navbar;

// 9353891277;
