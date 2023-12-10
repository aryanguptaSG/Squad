import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/common/ui/avatar"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/common/ui/dropdown-menu"

import { useAuth } from "@/Context/AuthProvider"

type Props = {
    src:string,
    fallback: string
}


function ProfileImage(props:Props) {
  const {setAuth} = useAuth()
    return (
      <DropdownMenu>
      <DropdownMenuTrigger className="bg-[#353535] hover:bg-[#5a5a5a] outline-none" asChild>
      <Avatar className="bg-[#5D5C5C] dark:bg-[#5D5C5C] w-[30px] h-[30px] cursor-pointer">
          <AvatarImage src={props.src} alt="profile" />
          <AvatarFallback className="bg-[#5D5C5C] dark:bg-[#5D5C5C]">{props.fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setAuth("null")}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      )
}

export default ProfileImage;