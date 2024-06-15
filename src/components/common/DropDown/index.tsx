import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/ui/dropdown-menu";
import arrowDown from "@/assets/icons/Expand_down.svg";

type Align = "center" | "start" | "end";

type Props = {
  value: string;
  setValue: any;
  optionList: Array<string>;
  titleClassName?: string;
  className?: string;
  align?: Align;
  showdownIcon?: boolean;
  iconW?: string;
  iconH?: string;
};

function DropDown(props: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="bg-transparent dark:bg-black outline-none"
        asChild
      >
        <div
          className={`flex items-center space-x-3 cursor-pointer ${props.titleClassName}`}
        >
          <div>{props.value}</div>
          {props.showdownIcon && (
            <img
              width={props.iconW ? props.iconW : 24}
              height={props.iconH ? props.iconH : 24}
              src={arrowDown}
              alt=""
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={props.align ? props.align : "center"}
        className={`dark:bg-Black-primaryBlack dark:border-Black-borderBlack dark:border-1`}
      >
        {props.optionList.map((option, i) => {
          return (
            <DropdownMenuItem
              onClick={() => {
                props.setValue(option);
              }}
              className={`hover:bg-Black-hoverBlack dark:focus:bg-Black-hoverBlack ${props.className}`}
              key={i}
            >
              {option}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
