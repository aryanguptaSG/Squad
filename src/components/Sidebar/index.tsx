import homeIcon from "@/assets/icons/Home.svg"
import announcement from "@/assets/icons/announcement.svg"
import invitePeople from "@/assets/icons/invite_people.svg"
import notesIcon from "@/assets/icons/notes.svg"
import QuestionBankIcon from "@/assets/icons/question_bank.svg"
import classroomIcon from "@/assets/icons/classroom.svg"
import { useNavigate } from "react-router-dom"
import { sideBarExpanded } from "@/Context/Signals"





function Sidebar() {
    const navigate = useNavigate();
    const sidebarElements = [
    {
        icon : homeIcon,
        description : "Home",
        to:"/"
    },
    {
        icon : announcement,
        description : "Announcement",
        to:"/announcement"
    },
    {
        icon : invitePeople,
        description : "Invite People",
        to:"/invite"
    },
    {
        icon : notesIcon,
        description : "Notes",
        to:"/notes"
    },
    {
        icon : QuestionBankIcon,
        description : "Question Bank",
        to:"/question-bank"
    },
    {
        icon : classroomIcon,
        description : "Class Rooms",
        to:"/classroom"
    }]

  return (
    <div className={`bg-primaryBlack transition-all duration-300 ${sideBarExpanded.value?"w-[250px]":"w-[60px]"} text-white pt-10`} onMouseOver={()=>{sideBarExpanded.value=true}} onMouseLeave={()=>{sideBarExpanded.value=false}}>
        <div className={`flex flex-col items-start pl-[10px] justify-start space-y-10 w-full`}>
        {
            sidebarElements.map((item,i)=>{
                return <div onClick={()=>{navigate(item.to)}} key={i} className={`flex items-center space-x-5 overflow-hidden cursor-pointer p-1 ${sideBarExpanded.value && 'hover:bg-[#3c3c3c] hover:rounded-md'} ${window.location.pathname===item.to ?"bg-[#606060] rounded-md p-1":""}`}>
                    <img width={24} height={24} src={item.icon} alt={item.description}  />
                    {sideBarExpanded.value && <p className="whitespace-nowrap text-ellipsis text-gray2 text-[14px] pr-5 font-Montserrat" onMouseOver={()=>{sideBarExpanded.value=true}}>{item.description}</p>}
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Sidebar;