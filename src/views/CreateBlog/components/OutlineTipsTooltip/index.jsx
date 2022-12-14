import BulbIcon from "@components/Icons/BulbIcon";
import React, { useState } from "react";

const OutlineTipsTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-10">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-sm font-bold text-dark flex items-center underline gap-1"
      >
        <BulbIcon />
        Tips
      </button>

      <div
        className={`absolute md:top-0 right-0 md:right-auto top-[calc(100%+8px)] md:left-[calc(100%+60px)] w-[240px] bg-white border border-dashed border-dark px-6 py-2.5 duration-200 ${
          isOpen
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-y-5 md:translate-x-5 md:translate-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          className="absolute top-0.5 right-2 p-1 font-light"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>

        <h6 className="text-sm font-bold text-dark underline">Outline tips</h6>

        <div className="text-sm leading-[16px] font-sans text-dark mt-3">
          Mirakle generated each outline using the Topic and Keywords input
          above.
          <br />
          <br />
          You can rewrite, drag and drop and delete them as you wish using the
          icons, see icon tips for more details.
          <br />
          <br />
          <p className="underline">Icon Tips</p>
          <ul className="[&>li]:list-item [&>li]:list-disc pl-5">
            <li>Generate a new outline</li>
            <li>Drag and drop outlines</li>
            <li>Delete an outline</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutlineTipsTooltip;
