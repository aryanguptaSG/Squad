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
    fallback: string,
    dropdown?:boolean,
    className?:string
}


function ProfileImage(props:Props) {
  const {setAuth} = useAuth()
    return (
      <DropdownMenu>
      <DropdownMenuTrigger className="bg-primaryBlack hover:bg-hoverBlack outline-none" asChild>
      <Avatar className={`w-[35px] h-[35px] cursor-pointer ${props.className}`}>
          <AvatarImage src={props.src} alt="profile" />
          <AvatarFallback className="bg-black1 dark:bg-black1 border-borderBlack border-[1px] text-white">{props.fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {props.dropdown&&<DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setAuth("null")}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>}
    </DropdownMenu>
      )
}

export default ProfileImage;