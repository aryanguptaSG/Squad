import Text from "@/components/common/Text";
import AddNewPeople from "./AddNewPeople";
import { DataTableDemo, columns } from "@/components/common/Table";
import { peopleInWorkspace } from "@/Context/Signals";
import Stats from "./stats";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/common/Table/data-table";

function InvitePage() {
  console.log("peopleInWorkspace->>>", peopleInWorkspace.value);
  const [statsData, setStatsData]: any = useState([]);
  useEffect(() => {
    setStatsData([
      {
        title: "Super Admin",
        body: peopleInWorkspace.value.filter(
          (item: any) => item.role == "SUPER ADMIN"
        ).length,
      },
      {
        title: "Admin",
        body: peopleInWorkspace.value.filter(
          (item: any) => item.role == "ADMIN"
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
    <div className="bg-white text-black dark:bg-black dark:text-white p-5 pl-10 min-h-full">
      <div className="flex justify-between">
        <div>
          <h1 className="body-1 font-Montserrat">Hey , Aryan Gupta </h1>
          <Text as="p" className="text-fs-15 mt-1">
            Welcome To Your Workspace 🎉
          </Text>
        </div>
        <div>
          <AddNewPeople />
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
