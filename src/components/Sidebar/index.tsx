import homeIcon from "@/assets/icons/Home.svg";
import announcement from "@/assets/icons/announcement.svg";
import invitePeople from "@/assets/icons/invite_people.svg";
import PaymentIcon from "@/assets/icons/payment.svg";
import classroomIcon from "@/assets/icons/classroom.svg";
import workspaceIcon from "@/assets/icons/workspace.svg";
import { sideBarExpanded } from "@/Context/Signals";
import Leaf from "./Leaf";
import Section from "./Section";
import { Authorization } from "@/Context/AuthProvider/AuthTypes";
import { workSpaceId } from "@/Context/Signals";

function Sidebar() {
  const sidebarElements = [
    {
      type: "LEAF",
      icon: homeIcon,
      description: "Home",
      to: "/",
      Access: Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: PaymentIcon,
      description: "Fees",
      to: "/fees",
      Access:
        workSpaceId.value == "GLOBAL"
          ? Authorization.NoAccess
          : Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: announcement,
      description: "Announcement",
      to: "/announcement",
      Access:
        workSpaceId.value == "GLOBAL"
          ? Authorization.NoAccess
          : Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: invitePeople,
      description: "Invite People",
      to: "/invite",
      Access:
        workSpaceId.value == "GLOBAL"
          ? Authorization.NoAccess
          : Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: classroomIcon,
      description: "Class Rooms",
      to: "/classroom",
      Access:
        workSpaceId.value == "GLOBAL"
          ? Authorization.NoAccess
          : Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: workspaceIcon,
      description: "Workspace",
      to: "/workspaces",
      Access: Authorization.ReadWrite,
    },
  ];

  return (
    <div
      className={`absolute z-10 h-full md:static bg-black transition-all duration-300 ${
        sideBarExpanded.value ? "w-[80%] md:w-[250px]" : "w-[0px] md:w-[60px]"
      } text-white pt-10`}
      onMouseOver={() => {
        sideBarExpanded.value = true;
      }}
      onMouseLeave={() => {
        sideBarExpanded.value = false;
      }}
    >
      <div
        className={`flex flex-col items-start pl-[10px] justify-start space-y-10 w-full`}
      >
        {sidebarElements.map((item, i) => {
          if (item.Access == Authorization.NoAccess) {
            return null;
          }
          switch (item.type) {
            case "LEAF":
              return <Leaf item={item} key={i} />;
            case "TOPLEVEL":
              return <Section key={i} section={item} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default Sidebar;
