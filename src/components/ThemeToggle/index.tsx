import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/common/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/ui/dropdown-menu";
import { useTheme } from "@/Context/ThemeProvider";

interface Props {
  bgClassName?: string;
  sunClassName?: string;
}

export function ThemeToggle({ bgClassName, sunClassName }: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="bg-Black-primaryBlack hover:bg-Black-hoverBlack outline-none"
        asChild
      >
        <Button
          className={`bg-Black-primaryBlack hover:bg-Black-hoverBlack outline-none dark:bg-Black-primaryBlack dark:hover:bg-Black-hoverBlack dark:outline-none ${bgClassName}`}
          size="icon"
        >
          <Sun
            className={`h-[1.2rem] outline-none w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${sunClassName}`}
          />
          <Moon className="text-white outline-none absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
