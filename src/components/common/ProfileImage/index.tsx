import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthProvider";

type Props = {
  src: string;
  fallback: string;
  dropdown?: boolean;
  className?: string;
  fallBackClassName?: string;
};

function ProfileImage(props: Props) {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="bg-Gray-gray hover:bg-Gray-darkGray dark:bg-Black-primaryBlack dark:hover:bg-Black-hoverBlack outline-none"
        asChild
      >
        <Avatar
          className={`w-[35px] h-[35px] cursor-pointer ${props.className}`}
        >
          <AvatarImage src={props.src} alt="profile" />
          <AvatarFallback
            className={`bg-Gray-gray hover:bg-Gray-darkGray dark:bg-Black-primaryBlack dark:hover:bg-Black-hoverBlack dark:border-Black-borderBlack dark:border-[1px] text-white ${props.fallBackClassName}`}
          >
            {props.fallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {props.dropdown && (
        <DropdownMenuContent className="w-[200px] mr-2" align="center">
          <DropdownMenuItem
            onClick={() => {
              navigate("/profile");
            }}
          >
            <p>View Profile</p>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setAuth(null)}>
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

export default ProfileImage;
