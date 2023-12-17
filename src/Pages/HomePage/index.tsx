import { workSpace } from "@/Context/Signals";
import Text from "@/components/common/Text";

function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center bg-bgLight text-black dark:bg-black dark:text-white">HomePage <Text as={"div"}> <Text as={"p"} capitalize="true">{workSpace.value}</Text> <Text className="body-1-bold">{workSpace.value}</Text> </Text></div>
  )
}

export default HomePage;