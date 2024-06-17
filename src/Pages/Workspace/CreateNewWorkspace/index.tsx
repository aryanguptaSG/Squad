import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/ui/select";
import { useState } from "react";
import apiCall from "@/api/apiCall";
import { CREATE_WORKSPACE } from "@/api/Endpoints";

type CreateClassModalProps = {
  triggerComponent: React.ReactNode;
};

function CreateWorkSpaceModal(props: CreateClassModalProps) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [type, setType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const createWorkspace = async () => {
    const data = {
      type,
      name,
      logoIcon: logo,
    };
    // const res = await apiCall(CREATE_WORKSPACE, "POST", data);
    console.log(data);
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      setOpen={setShowModal}
      triggerComponent={props.triggerComponent}
      title="Create New Workspace"
    >
      <div className="w-[600px]">
        <div className="px-3 mt-3 space-y-5">
          <Input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Input
            type="text"
            placeholder="Logo"
            onChange={(e) => {
              setLogo(e.target.value);
            }}
            value={logo}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Select onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-[180px] dark:text-Gray-light-gray">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SCHOOL">School</SelectItem>
              <SelectItem value="COACHING">Coaching</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end mt-5">
          <Button
            onClick={createWorkspace}
            text="Create"
            className="py-1 rounded-md"
          />
        </div>
      </div>
    </Modal>
  );
}

function CreateWorkSpace() {
  return (
    <CreateWorkSpaceModal
      triggerComponent={
        <Button
          className="font-normal text-sm rounded"
          text="Create WorkSpace"
        />
      }
    />
  );
}

export default CreateWorkSpace;
