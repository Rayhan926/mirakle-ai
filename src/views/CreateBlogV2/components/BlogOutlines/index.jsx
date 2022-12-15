import Image from "next/image";
import React from "react";
import { outlines } from "src/data/titles";

const BlogOutlines = () => {
  return (
    <div className="space-y-[13px] mt-[18px]">
      {outlines.map((outline, i) => (
        <div className="flex items-center gap-[22px]" key={i}>
          <div className="shrink-0">
            <Image
              width={11.5}
              height={18}
              src="/img/drag-handle.svg"
              alt="Drag"
            />
          </div>

          <textarea
            defaultValue={outline.title}
            className="border resize-none border-[#DEE2DF] font-inter text-[13px] leading-[16px] font-medium px-[15px] py-[14px] rounded-[5px] w-full outline-none"
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default BlogOutlines;
