import { Checkbox as Box} from "../ui/checkbox"

type Props = {
    label : string,
    labelClasses?: string,
    boxClasses?:string,
    className?:string
}

function Checkbox(props:Props) {
  return (
    <div className={`flex items-center space-x-2 ${props.className}`}>
      <Box className={`${props.boxClasses}`} id="terms" />
      <label
        htmlFor="terms"
        className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${props.labelClasses}`}
      >
        {props.label}
      </label>
    </div>
  )
}

export default Checkbox