import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";
import DropDown from "@/components/common/DropDown";
import { readFile } from "@/lib/utils";
import { useState } from "react";
import { peopleInWorkspace } from "@/Context/Signals";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/common/ui/checkbox";
import { Button as ShacnButton } from "@/components/common/ui/button";
import { ArrowUpDown } from "lucide-react";
import DataTable from "@/components/common/Table";
import { workSpace } from "@/Context/Signals";
import apiCall from "@/api/apiCall";
import { ADD_PEOPLE_IN_BULK } from "@/api/Endpoints";

type AddNewPeopleModalProps = {
  triggerComponent: React.ReactNode;
};

export type User = {
  phone: string;
  email: string;
  password: string;
};

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <ShacnButton
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ShacnButton>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase cursor-pointer">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      return <div>{row.getValue("phone")}</div>;
    },
  },
  {
    accessorKey: "password",
    header: "Password",
    cell: ({ row }) => {
      return <div>{row.getValue("password")}</div>;
    },
  },
];

function AddNewPeopleModal(props: AddNewPeopleModalProps) {
  console.log(workSpace.value);

  const [selectedRole, setSelectedRole] = useState("ADMIN");
  const [emails, setEmails] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
  const addPeopleInWorkspace = async (emails: any) => {
    const req_body = {
      userList: emails,
      workspaceId: workSpace.value.workspaceId,
      role: selectedRole,
    };
    const res = await apiCall(ADD_PEOPLE_IN_BULK, "POST", req_body);
    console.log(res);
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      setOpen={setShowModal}
      triggerComponent={props.triggerComponent}
      title=""
    >
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
            optionList={["ADMIN", "SUBADMIN", "TEACHER", "STUDENT"]}
            iconH="15"
            iconW="15"
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button
            text="Create"
            className="py-1 rounded-md"
            onClick={() => {
              // emails.map((item: any) => (item.role = selectedRole));
              // peopleInWorkspace.value = [...peopleInWorkspace.value, ...emails];
              addPeopleInWorkspace(emails);
            }}
          />
        </div>
        <div className="max-h-[500px] overflow-y-scroll mt-5">
          <DataTable data={emails} columns={columns} />
        </div>
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
