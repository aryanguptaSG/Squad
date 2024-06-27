import { useNavigate } from "react-router-dom";
import { sideBarExpanded } from "@/Context/Signals";

function Leaf({ item }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(item.to);
        sideBarExpanded.value = false;
      }}
      className={`flex items-center space-x-5 overflow-hidden cursor-pointer p-1 ${
        sideBarExpanded.value && "hover:bg-[#3c3c3c] hover:rounded-md"
      } ${
        window.location.pathname === item.to
          ? `md:bg-[#606060] ${
              sideBarExpanded.value && "bg-[#606060]"
            } rounded-md p-1`
          : ""
      }`}
    >
      {item.icon && (
        <img width={24} height={24} src={item.icon} alt={item.description} />
      )}
      {sideBarExpanded.value && (
        <p
          className={`whitespace-nowrap text-ellipsis text-Gray-gray2 text-[14px] pr-5 font-Montserrat ${
            !item.icon ? "pl-3" : ""
          }`}
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
