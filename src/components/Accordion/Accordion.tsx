import { useState } from "react";
import { Minus, Plus } from "../SVGs/SVGs";

const Accordion: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // check if window is mobile or computer

  const accordionStyle = {
    overflow: "hidden",
    transition: "height 0.3s ease",
    height: isOpen ? "fit-content" : "0px",
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`flex flex-col text-black w-full hover:bg-gray-100 ${
        isOpen && "bg-gray-100"
      } p-2 rounded-lg cursor-pointer`}
    >
      <div className="flex flex-row justify-between items-center gap-5 cursor-pointer">
        <h1 className="text-md md:text-base">{title}</h1>
        <button className="focus:outline-none">
          {isOpen ? <Minus /> : <Plus />}
        </button>
      </div>
      <div style={accordionStyle} className="px-3">
        {isOpen && <div className="my-5">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
