import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/ui/select";
import { classRooms, workSpace } from "@/Context/Signals";
import { peopleInWorkspace } from "@/Context/Signals";
import apiCall from "@/api/apiCall";
import { CREATE_GROUP } from "@/api/Endpoints";

type CreateClassModalProps = {
  triggerComponent: React.ReactNode;
};

function CreateClassModal(props: CreateClassModalProps) {
  const [showModal, setShowModal] = useState(false);
  const teacherList = useMemo(
    () => peopleInWorkspace.value.filter((item: any) => item.role == "TEACHER"),
    [peopleInWorkspace.value]
  );
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [name, setName] = useState("");
  const createNewClass = async () => {
    const res = await apiCall(CREATE_GROUP, "POST", {
      name,
      workspaceId: workSpace.value.workspaceId,
      classTeacher: selectedTeacher,
    });
    console.log("====================================");
    console.log(res);
    console.log("====================================");
    setName("");
    setSelectedTeacher("");
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      setOpen={setShowModal}
      triggerComponent={props.triggerComponent}
      title="Create New Class"
    >
      <div className="w-[600px]">
        <div className="px-3 mt-3 space-y-5">
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div>
            <label className="text-sm text-Gray-dark-gray dark:text-gray-50">
              Select Class Teacher
            </label>
            <Select onValueChange={(value) => setSelectedTeacher(value)}>
              <SelectTrigger className="w-fit dark:text-Gray-light-gray space-x-2">
                <SelectValue placeholder="Class Teacher" />
              </SelectTrigger>
              <SelectContent>
                {teacherList.map((item: any, i) => {
                  return (
                    <SelectItem key={i} value={item.user.email}>
                      {item.user.email}{" "}
                      {item.user.name ? `,${item.user.name}` : ""}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button
            onClick={createNewClass}
            text="Create"
            className="py-1 rounded-md"
          />
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
