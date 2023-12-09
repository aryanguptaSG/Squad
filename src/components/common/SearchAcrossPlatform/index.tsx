import searchIcon from "@/assets/icons/search.svg"

function SearchAcrossPlatform() {
  return (
    <div className="cursor-pointer h-[40px] w-[250px] bg-[#434343] rounded-md ml-[76px] flex justify-start items-center px-2 border-[#4f4f4f] border-[0.1px]">
        <img className="" width={24} height={24} src={searchIcon} alt="search" />
        <p className="text-[12px] ml-[10px] text-[#999999]">Search Across Platform </p>
        <p className="text-[12px] ml-[30px] text-[#999999]">⌘ + K</p>
    </div>
  )
}

export default SearchAcrossPlatform;