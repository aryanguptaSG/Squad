import Text from "@/components/common/Text";
import ProfileImage from "@/components/common/ProfileImage";
import Folder from "@/assets/icons/Folder";
import QuestionBankIcon from "@/assets/icons/QuestionBankIcon";
import { useTheme } from "@/Context/ThemeProvider";
type Props = {
    title:string,
    subtitle:string,
    teacherName:string
  }

function ClassCard(props:Props) {
    const {theme} = useTheme();
  return (
    <div className="w-[300px] h-[300px] border border-gray rounded-md overflow-clip relative cursor-pointer hover:shadow-gray-box hover:border-none">
        <div className="h-[91px] bg-gray relative pl-[15px] pt-[9px]">
            <Text className="text-white dark:text-white head-5-medium font-Montserrat" as="h3">{props.title}</Text>
            <Text className="text-white dark:text-white mt-5 text-sm font-Montserrat" as="p">{props.subtitle}</Text>
            <ProfileImage className="w-[60px] h-[60px] absolute right-5 -bottom-7" src={props.teacherName} fallback={props.teacherName}/>
        </div>
        <div className="flex justify-end items-center pr-5 absolute bottom-0 w-full border-t-0.5 border-gray py-2 space-x-2">
            <QuestionBankIcon className="cursor-pointer" color={theme==="dark"?"white":"#33363F"}/>
            <Folder  className="cursor-pointer" stroke={1} color={theme==="dark"?"white":"#33363F"}/>
        </div>
    </div>
  )
}

export default ClassCard;