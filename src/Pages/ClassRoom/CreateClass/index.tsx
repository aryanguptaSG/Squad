import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";

type CreateClassModalProps = {
  triggerComponent: React.ReactNode;
};

function CreateClassModal(props: CreateClassModalProps) {
  return (
    <Modal triggerComponent={props.triggerComponent} title="Create New Class">
      <div className="w-[600px]">
        <div className="px-3 mt-3 space-y-5">
          <Input
            type="text"
            placeholder="Title"
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Input
            type="text"
            placeholder="Description"
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button text="Create" className="py-1 rounded-md" />
        </div>
      </div>
    </Modal>
  );
}

function CreateClass() {
  return (
    <CreateClassModal
      triggerComponent={
        <Button className="font-normal text-sm rounded" text="Create Class" />
      }
    />
  );
}

export default CreateClass;
