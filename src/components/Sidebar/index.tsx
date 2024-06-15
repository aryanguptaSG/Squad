import homeIcon from "@/assets/icons/Home.svg";
import announcement from "@/assets/icons/announcement.svg";
import invitePeople from "@/assets/icons/invite_people.svg";
import notesIcon from "@/assets/icons/notes.svg";
import QuestionBankIcon from "@/assets/icons/question_bank.svg";
import PaymentIcon from "@/assets/icons/payment.svg";
import classroomIcon from "@/assets/icons/classroom.svg";
import { sideBarExpanded } from "@/Context/Signals";
import Leaf from "./Leaf";
import Section from "./Section";
import { Authorization } from "@/Context/AuthProvider/AuthTypes";

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
      type: "TOPLEVEL",
      icon: homeIcon,
      name: "Profile",
      links: [
        {
          type: "LEAF",
          description: "Account",
          to: "/",
          Access: Authorization.ReadWrite,
        },
        {
          type: "LEAF",
          description: "Appearance",
          to: "/",
          Access: Authorization.ReadWrite,
        },
        {
          type: "LEAF",
          description: "Display",
          to: "/",
          Access: Authorization.ReadWrite,
        },
      ],
      Access: Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: PaymentIcon,
      description: "Fees",
      to: "/fees",
      Access: Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: announcement,
      description: "Announcement",
      to: "/announcement",
      Access: Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: invitePeople,
      description: "Invite People",
      to: "/invite",
      Access: Authorization.ReadWrite,
    },
    {
      type: "LEAF",
      icon: classroomIcon,
      description: "Class Rooms",
      to: "/classroom",
      Access: Authorization.ReadWrite,
    },
  ];

  return (
    <div
      className={`bg-Black-primaryBlack transition-all duration-300 ${
        sideBarExpanded.value ? "w-[250px]" : "w-[60px]"
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
              return <Section section={item} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default Sidebar;
