import Text from "@/components/common/Text";
import CreateClass from "./CreateClass";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/common/ui/button";
import { Checkbox } from "@/components/common/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import DataTable from "@/components/common/Table";
import { classRooms, selectedClass } from "@/Context/Signals";
import ClassDetails from "./ClassDetails";

export type Class = {
  class: string;
  classTeacher: string;
  totalStudents: Number;
};

const columns: ColumnDef<Class>[] = [
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
    accessorKey: "group",
    header: "Class",
    cell: ({ row }) => {
      let rowVal: any = row.getValue("group");
      return <div>{rowVal.name}</div>;
    },
  },
  {
    accessorKey: "group",
    header: "Class Teacher",
    cell: ({ row }) => {
      let rowVal: any = row.getValue("group");
      return (
        <div>
          <div>Name : {rowVal.groupTeacher.name}</div>
          <div>Email : {rowVal.groupTeacher.email}</div>
          <div>Phone Number : {rowVal.groupTeacher.mobileNumber}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalStudents",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Students
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>0</div>,
  },
];

function ClassRoom() {
  console.log("====================================");
  console.log(classRooms.value);
  console.log("====================================");
  return (
    <div className="bg-white dark:bg-Gray-dark-gray dark:text-whitetext-black dark:text-white p-5 pl-10 min-h-full">
      <div className="flex justify-between">
        <div>
          <h1 className="body-1 font-Montserrat">Hey , Aryan Gupta </h1>
          <Text as="p" className="text-fs-15 mt-1">
            Welcome To ClassRoom 🎉
          </Text>
        </div>
        <div>
          <CreateClass />
        </div>
      </div>
      {selectedClass.value == "" ? (
        <DataTable data={classRooms.value} columns={columns} />
      ) : (
        <ClassDetails />
      )}
    </div>
  );
}

export default ClassRoom;
