import Text from "@/components/common/Text";
import ClassCard from "./ClassCard";
import CreateClass from "./CreateClass";
function ClassRoom() {
  return (
    <div className="bg-Gray-bgLight dark:bg-Gray-dark-gray dark:text-whitetext-black dark:text-white p-5 pl-10 min-h-full">
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
    </div>
  );
}

export default ClassRoom;
