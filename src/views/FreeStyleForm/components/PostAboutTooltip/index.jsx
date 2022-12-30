import BulbIcon from "@components/Icons/BulbIcon";
import React, { useEffect, useState } from "react";

const PostAboutTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 200);
  }, []);

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
        className={`absolute lg:top-0 right-0 lg:right-auto top-[calc(100%+8px)] lg:left-[calc(100%+60px)] w-[240px] bg-white border border-dashed border-dark p-6 duration-200 ${
          isOpen
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-y-5 lg:translate-x-5 lg:translate-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          className="absolute top-0.5 right-2 p-1 font-light"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>

        <div className="text-sm font-bold space-y-3">
          <p className="underline">Freestyle tips</p>

          <p>1 Provide more details to get more specific results</p>

          <p>
            2 - Try to include your audience, problem space, why it matters, and
            what makes you unique
          </p>

          <p>3 - Use 15 words or more</p>
        </div>
      </div>
    </div>
  );
};

export default PostAboutTooltip;
