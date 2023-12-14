type Props = {
  text: string
  onClick?: any
  className?: string
}

function PrimaryButton(props: Props) {
  return (
    <button className={`bg-primaryBlue px-10 py-1 text-white rounded-xl ${props.className}`} onClick={props.onClick}>{props.text}</button>
  )
}

export default PrimaryButton;