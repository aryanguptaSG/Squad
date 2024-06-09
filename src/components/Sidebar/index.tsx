import homeIcon from "@/assets/icons/Home.svg";
import announcement from "@/assets/icons/announcement.svg";
import invitePeople from "@/assets/icons/invite_people.svg";
import notesIcon from "@/assets/icons/notes.svg";
import QuestionBankIcon from "@/assets/icons/question_bank.svg";
import classroomIcon from "@/assets/icons/classroom.svg";
import { sideBarExpanded } from "@/Context/Signals";
import Leaf from "./Leaf";
import Section from "./Section";

function Sidebar() {
  const sidebarElements = [
    {
      type: "LEAF",
      icon: homeIcon,
      description: "Home",
      to: "/",
    },
    {
      type: "LEAF",
      icon: announcement,
      description: "Announcement",
      to: "/announcement",
    },
    {
      type: "LEAF",
      icon: invitePeople,
      description: "Invite People",
      to: "/invite",
    },
    {
      type: "LEAF",
      icon: notesIcon,
      description: "Notes",
      to: "/notes",
    },
    {
      type: "LEAF",
      icon: QuestionBankIcon,
      description: "Question Bank",
      to: "/question-bank",
    },
    {
      type: "LEAF",
      icon: classroomIcon,
      description: "Class Rooms",
      to: "/classroom",
    },
  ];

  return (
    <div
      className={`bg-primaryBlack transition-all duration-300 ${
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
          switch (item.type) {
            case "LEAF":
              console.log("item =>   ", item);
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
