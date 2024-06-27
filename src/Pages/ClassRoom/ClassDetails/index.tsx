import { selectedClass } from "@/Context/Signals";
import { ChevronLeft } from "lucide-react";

function ClassDetails() {
  return (
    <div className="mt-10">
      <div
        onClick={() => {
          selectedClass.value = "";
        }}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <ChevronLeft />
        <p>Go Back</p>
      </div>
    </div>
  );
}

export default ClassDetails;
