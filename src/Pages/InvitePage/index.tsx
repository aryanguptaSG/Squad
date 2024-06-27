import Text from "@/components/common/Text";
import AddNewPeople from "./AddNewPeople";
import AddStudent from "./AddStudent";
import { peopleInWorkspace } from "@/Context/Signals";
import Stats from "./stats";
import { useEffect, useState } from "react";
import DataTable from "@/components/common/Table";
import { workSpace } from "@/Context/Signals";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/common/ui/button";
import { Checkbox } from "@/components/common/ui/checkbox";
import { ArrowUpDown } from "lucide-react";

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
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      let rowVal: any = row.getValue("user");
      return <div className="lowercase cursor-pointer">{rowVal.email}</div>;
    },
  },
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      let rowVal: any = row.getValue("user");
      return <div className="lowercase cursor-pointer">{rowVal.name}</div>;
    },
  },
  {
    accessorKey: "user",
    header: "Photo",
    cell: ({ row }) => {
      let rowVal: any = row.getValue("user");
      return (
        <img
          className="rounded-full"
          width={50}
          src={rowVal.profilePic}
          alt=""
        />
      );
    },
  },
];

function InvitePage() {
  console.log("peopleInWorkspace->>>", peopleInWorkspace.value);
  const [statsData, setStatsData]: any = useState([]);
  useEffect(() => {
    setStatsData([
      {
        title: "Admin",
        body: peopleInWorkspace.value.filter(
          (item: any) => item.role == "ADMIN"
        ).length,
      },
      {
        title: "Sub Admin",
        body: peopleInWorkspace.value.filter(
          (item: any) => item.role == "SUBADMIN"
        ).length,
      },
      {
        title: "Teacher",
        body: peopleInWorkspace.value.filter(
          (item: any) => item.role == "TEACHER"
        ).length,
      },
      {
        title: "Students",
        body: peopleInWorkspace.value.filter(
          (item: any) => item.role == "STUDENT"
        ).length,
      },
    ]);
  }, [peopleInWorkspace.value]);

  return (
    <div className=" bg-white dark:bg-Gray-dark-gray dark:text-white p-5 pl-10 min-h-full">
      <div className="flex justify-between flex-wrap">
        <div>
          <h1 className="body-1 font-Montserrat">Hey , Aryan Gupta </h1>
          <Text as="p" className="text-fs-15 mt-1">
            Welcome To{" "}
            {workSpace.value ? workSpace.value.workspace.name : "Global"} 🎉
          </Text>
        </div>
        <div className="flex gap-5 flex-wrap">
          <div>
            <AddStudent />
          </div>
          <div>
            <AddNewPeople />
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-around flex-wrap gap-5">
        {statsData.map((item: any, index: number) => {
          return <Stats key={index} title={item.title} body={item.body} />;
        })}
      </div>
      {/* <DataTableDemo data={peopleInWorkspace.value} /> */}
      <DataTable data={peopleInWorkspace.value} columns={columns} />
    </div>
  );
}

export default InvitePage;
