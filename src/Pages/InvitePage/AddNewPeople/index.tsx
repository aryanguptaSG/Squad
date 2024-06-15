import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";
import DropDown from "@/components/common/DropDown";
import { readFile } from "@/lib/utils";
import { useState } from "react";
import { peopleInWorkspace } from "@/Context/Signals";

type AddNewPeopleModalProps = {
  triggerComponent: React.ReactNode;
};

function AddNewPeopleModal(props: AddNewPeopleModalProps) {
  const [selectedRole, setSelectedRole] = useState("ADMIN");
  const [emails, setEmails] = useState([]);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      try {
        const jsonData: any = await readFile(file);
        console.log("Parsed Data:", jsonData);
        setEmails(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <Modal triggerComponent={props.triggerComponent} title="">
      <div className="w-[600px]">
        <div className="px-3 mt-3 space-y-5">
          <Input
            type="file"
            accept=".csv,.xlsx"
            onChange={handleFileChange}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <DropDown
            showdownIcon={true}
            className="rounded-md "
            titleClassName="dark:text-Gray-gray text-Gray-dark-gray cursor-pointer text-xs bg-transparent w-fit hover:bg-none border border-gray px-5 py-2 rounded-lg"
            value={selectedRole}
            setValue={(newVal: string) => {
              setSelectedRole(newVal);
            }}
            optionList={["SUPER ADMIN", "ADMIN", "TEACHER", "STUDENT"]}
            iconH="15"
            iconW="15"
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button
            text="Create"
            className="py-1 rounded-md"
            onClick={() => {
              emails.map((item: any) => (item.role = selectedRole));
              peopleInWorkspace.value = [...peopleInWorkspace.value, ...emails];
            }}
          />
        </div>
        <pre className="w-full max-h-64 overflow-scroll">
          {JSON.stringify(emails, null, 4)}
        </pre>
      </div>
    </Modal>
  );
}

function AddNewPeople() {
  return (
    <AddNewPeopleModal
      triggerComponent={
        <Button className="font-normal text-sm rounded" text="Add New People" />
      }
    />
  );
}

export default AddNewPeople;
