import { useNavigate } from "react-router-dom";
import { sideBarExpanded } from "@/Context/Signals";

function Leaf({ item }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(item.to);
      }}
      className={`flex items-center space-x-5 overflow-hidden cursor-pointer p-1 ${
        sideBarExpanded.value && "hover:bg-[#3c3c3c] hover:rounded-md"
      } ${
        window.location.pathname === item.to
          ? "bg-[#606060] rounded-md p-1"
          : ""
      }`}
    >
      <img width={24} height={24} src={item.icon} alt={item.description} />
      {sideBarExpanded.value && (
        <p
          className="whitespace-nowrap text-ellipsis text-gray2 text-[14px] pr-5 font-Montserrat"
          onMouseOver={() => {
            sideBarExpanded.value = true;
          }}
        >
          {item.description}
        </p>
      )}
    </div>
  );
}

export default Leaf;
