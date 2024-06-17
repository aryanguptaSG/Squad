import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog";

type Props = {
  triggerComponent: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  open: boolean;
  setOpen: any;
};

export default function Modal({
  triggerComponent,
  title,
  description = "",
  children,
  footer,
  open,
  setOpen,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full">{triggerComponent}</div>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader>
          <DialogTitle className="dark:text-white text-Gray-gray-600">
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter>
          <div>{footer}</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
