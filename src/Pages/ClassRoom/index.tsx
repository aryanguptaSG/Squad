import Text from "@/components/common/Text";
import ClassCard from "./ClassCard";
import CreateClass from "./CreateClass";
function ClassRoom() {
  const data = [
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    },
    {
      title:"Physics",
      subtitle:"Lectures with Aryan Gupta",
      teacherName:"AG"
    }
  ]
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white p-5 pl-10 min-h-full">
      <div className="flex justify-between">
        <div>
          <h1 className="body-1 font-Montserrat">Hey , Aryan Gupta </h1>
          <Text as="p"  className="text-fs-15 mt-1">Welcome To ClassRoom 🎉</Text>
        </div>
        <div>
          <CreateClass/>
        </div>
      </div>
      <div className="mt-7 flex justify-center sm:justify-start items-center gap-10 flex-wrap">
          {data.map((item,i)=>{
            return <ClassCard key={i} title={item.title} subtitle={item.subtitle} teacherName={item.teacherName}/>
          })}
      </div>
    </div>
  )
}

export default ClassRoom;