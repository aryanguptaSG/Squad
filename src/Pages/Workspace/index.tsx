import Text from "@/components/common/Text";
import CreateWorkSpace from "./CreateNewWorkspace";
import { allWorkspaces } from "@/Context/Signals";
import { Checkbox } from "@/components/common/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/common/ui/button";
import DataTable from "@/components/common/Table";

export type User = {
  role: "ADMIN" | "SUBADMIN" | "TEACHER" | "STUDENT";
  email: string;
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
    accessorKey: "workspace",
    header: "Logo",
    cell: ({ row }) => {
      let rowVal: any = row.getValue("workspace");
      return <img width={50} src={rowVal.logoIcon} alt="" />;
    },
  },
  {
    accessorKey: "workspace",
    header: "Name",
    cell: ({ row }) => {
      let rowVal: any = row.getValue("workspace");
      return <div className="cursor-pointer">{rowVal.name}</div>;
    },
  },
  {
    accessorKey: "workspace",
    header: "Type",
    cell: ({ row }) => {
      let rowVal: any = row.getValue("workspace");
      return <div className="cursor-pointer">{rowVal.type}</div>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      let role = row.getValue("role");
      let className =
        role == "ADMIN"
          ? "bg-red-500"
          : role == "SUBADMIN"
          ? "bg-orange-500"
          : role == "TEACHER"
          ? "bg-green-500"
          : "bg-Gray-darkGray";
      return (
        <div
          className={`capitalize ${className} w-fit text-white px-3 py-1 rounded-md`}
        >
          {row.getValue("role")}
        </div>
      );
    },
  },
  {
    accessorKey: "workspaceId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Workspace ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div
        onClick={() => {
          alert(row.getValue("workspaceId"));
        }}
        className="lowercase cursor-pointer"
      >
        {row.getValue("workspaceId")}
      </div>
    ),
  },
];

function Workspace() {
  console.log(allWorkspaces.value);

  return (
    <div className="bg-white dark:bg-Gray-dark-gray dark:text-whitetext-black dark:text-white p-5 pl-10 min-h-full">
      <div className="flex justify-between">
        <div>
          <h1 className="body-1 font-Montserrat">Hey , Aryan Gupta </h1>
          <Text as="p" className="text-fs-15 mt-1">
            Welcome To Workspace 🎉
          </Text>
        </div>
        <div>
          <CreateWorkSpace />
        </div>
      </div>
      {/* <div className="mt-7 flex justify-center sm:justify-start items-center gap-10 flex-wrap">
        {JSON.stringify(allWorkspaces.value, null, 4)}
      </div> */}
      <div className="mt-10">
        <DataTable data={allWorkspaces.value} columns={columns} />
      </div>
    </div>
  );
}

export default Workspace;
