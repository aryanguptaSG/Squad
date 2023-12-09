import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/common/ui/avatar"

type Props = {
    src:string,
    fallback: string
}


function ProfileImage(props:Props) {
    return (
        <Avatar className="bg-[#5D5C5C] dark:bg-[#5D5C5C] w-[30px] h-[30px]">
          <AvatarImage src={props.src} alt="profile" />
          <AvatarFallback className="bg-[#5D5C5C] dark:bg-[#5D5C5C]">{props.fallback}</AvatarFallback>
        </Avatar>
      )
}

export default ProfileImage;