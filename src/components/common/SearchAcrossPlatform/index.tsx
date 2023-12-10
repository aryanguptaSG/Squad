import searchIcon from "@/assets/icons/search.svg"
import Modal from "../Modal";
import { Input } from "@/components/common/ui/input"
import useKeyPress from "../UseKeyPress";
import { useRef } from "react";

function SearchAcrossPlatform() {
  const trigger = useRef<HTMLInputElement>(null)
  const triggerComponent = 
  (
  <div ref={trigger} className="cursor-pointer h-[40px] w-[250px] bg-[#434343] rounded-md ml-[76px] flex justify-start items-center px-2 border-[#4f4f4f] border-[0.1px]">
    <img className="" width={24} height={24} src={searchIcon} alt="search" />
    <p className="text-[12px] ml-[10px] text-[#999999]">Search Across Platform </p>
    <p className="text-[12px] ml-[30px] text-[#999999]">⌘ + K</p>
  </div>
  )
  useKeyPress("KeyK",()=>{trigger.current?.click()})
  return (
    <Modal triggerComponent={triggerComponent} title="Search Across Platform" description="Search anything across the platform with optimised search algorithm">
      <div className="w-[600px] flex flex-col space-y-5 text-black dark:text-white">
        <Input className="bg-transparent dark:bg-transparent" type="text" placeholder="Search ..." />

        <div>
          <p>Workspaces</p>
        </div>

        <div>
          <p>Users</p>
        </div>

        <div>
          <p>Notes</p>
        </div>


      </div>
    </Modal>
  )
}

export default SearchAcrossPlatform;