import { workSpace } from "@/Context/Signals";

function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center bg-bgLight text-black dark:bg-black dark:text-white">HomePage {workSpace.value}</div>
  )
}

export default HomePage;