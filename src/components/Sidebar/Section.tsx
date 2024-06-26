import { useState } from "react";
import { sideBarExpanded } from "@/Context/Signals";
import arrowDown from "@/assets/icons/Expand_down.svg";
import Leaf from "./Leaf";

function Section({ section }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen((val) => !val);
        }}
        className={`flex items-center space-x-5 overflow-hidden cursor-pointer p-1 ${
          sideBarExpanded.value && "hover:bg-[#3c3c3c] hover:rounded-md"
        } ${
          window.location.pathname === section.to
            ? "bg-[#606060] rounded-md p-1"
            : ""
        }`}
      >
        <img
          width={24}
          height={24}
          src={section.icon}
          alt={section.description}
        />
        {sideBarExpanded.value && (
          <div className="flex justify-center items-center">
            <p
              className="whitespace-nowrap text-ellipsis text-Gray-gray2 text-[14px] pr-5 font-Montserrat"
              onMouseOver={() => {
                sideBarExpanded.value = true;
              }}
            >
              {section.name}
            </p>{" "}
            <img
              className={!isOpen ? "-rotate-90" : ""}
              src={arrowDown}
              alt="down"
            />
          </div>
        )}
      </div>
      {isOpen && sideBarExpanded.value && (
        <div className="border-l-1 rounded-tl-[5px] rounded-bl-[5px] border-gray flex-col space-y-3 ml-3 mt-2 p-1 pl-5">
          {section.links.map((item: any, i: any) => {
            switch (item.type) {
              case "LEAF":
                return <Leaf item={item} key={i} />;
              case "TOPLEVEL":
                return <Section section={item} key={i} />;
              default:
                return null;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Section;
