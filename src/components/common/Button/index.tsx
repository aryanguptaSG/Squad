import { cn } from "@/lib/utils";

type Variant = "default" | "disabled" | "outline"

type Props = {
  className?:string,
  text:string,
  variant?:Variant,
  onClick?:any,
  style?:any
}

function Button(props:Props) {
    const { className = "", text = "", variant="default", onClick, style = {} } = props;
    const disabled = variant === "disabled"
    let btnColor = ''
    switch (variant){
      case "default" : btnColor = "bg-blue-primaryBlue text-white";break;
      case "outline" : btnColor = "border-1.5 border-blue-primaryBlue text-blue-primaryBlue dark:text-blue-primaryBlue";break;
      case "disabled" : btnColor = "bg-light-disabled-button dark:bg-dark-disabled-button text-gray";break;
    }
    return (
        <button
            style={style}
            className={cn(`rounded-lg py-2 px-4 font-semibold w-11rem font-Montserrat`,cn(btnColor,className))}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;