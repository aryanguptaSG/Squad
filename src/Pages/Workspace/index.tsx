import Text from "@/components/common/Text";
import CreateWorkSpace from "./CreateNewWorkspace";
import { allWorkspaces } from "@/Context/Signals";

function Workspace() {
  console.log(allWorkspaces.value);

  return (
    <div className="bg-Gray-bgLight dark:bg-Gray-dark-gray dark:text-whitetext-black dark:text-white p-5 pl-10 min-h-full">
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
      <div className="mt-7 flex justify-center sm:justify-start items-center gap-10 flex-wrap">
        {JSON.stringify(allWorkspaces.value, null, 4)}
      </div>
    </div>
  );
}

export default Workspace;
