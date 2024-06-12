import Text from "@/components/common/Text";
import AddNewPeople from "./AddNewPeople";

function InvitePage() {
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
    </div>
  );
}

export default InvitePage;
