import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog"

type Props = {
    triggerComponent : React.ReactNode,
    title : string,
    description?:string,
    children:React.ReactNode,
    footer?:React.ReactNode
}

export default function Modal({triggerComponent,title,description="",children,footer}:Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
            {triggerComponent}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader>
          <DialogTitle className="dark:text-white text-gray-600">{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>
        {
            children
        }
        </div>
        <DialogFooter>
          <div>
            {
                footer
            }
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
