import homeIcon from "@/assets/icons/Home.svg"
import announcement from "@/assets/icons/announcement.svg"
import invitePeople from "@/assets/icons/invite_people.svg"
import notesIcon from "@/assets/icons/notes.svg"
import QuestionBankIcon from "@/assets/icons/question_bank.svg"
import classroomIcon from "@/assets/icons/classroom.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"





function Sidebar() {
    const [activeIcon, setactiveIcon] = useState(0);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const sidebarElements = [
        {
            icon: homeIcon,
            description: "Home",
            to: "/"
        },
        {
            icon: announcement,
            description: "Announcement",
            to: "/announcement"
        },
        {
            icon: invitePeople,
            description: "Invite People",
            to: "/invite"
        },
        {
            icon: notesIcon,
            description: "Notes",
            to: "/notes"
        },
        {
            icon: QuestionBankIcon,
            description: "Question Bank",
            to: "/question-bank"
        },
        {
            icon: classroomIcon,
            description: "ClassRooms",
            to: "/classroom"
        }]

    return (
        <div className={`bg-primaryBlack w-[60px] transition-all duration-300 hover:w-[250px] text-white pt-10`} onMouseOver={() => { setHover(true) }} onMouseOut={() => { setHover(false) }}>
            <div className={`flex flex-col items-start pl-[10px] justify-start space-y-10 w-full`}>
                {
                    sidebarElements.map((item, i) => {
                        return <div onClick={() => { setactiveIcon(i); navigate(item.to) }} key={i} className={`flex items-center space-x-5 overflow-hidden cursor-pointer p-1 hover:bg-[#3c3c3c] hover:rounded-md ${i == activeIcon ? "bg-[#606060] rounded-md p-1" : ""}`}>
                            <img width={24} height={24} src={item.icon} alt={item.description} />
                            {hover && <p className="whitespace-nowrap text-ellipsis text-gray2 text-[14px] pr-5">{item.description}</p>}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;