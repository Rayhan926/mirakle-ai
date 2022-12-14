import Image from "next/image";
import React from "react";

const outlines = [
  "Losing 10kg in 90 days is an achievable goal with the right diet and exercise plan.",
  "Explore different diet plans such as Keto and other low-carb diets.",
  "Understand the principles of calorie deficit and how they help to achieve the goal.",
  "Look into ways to increase physical activity such as walking, running, or Pilates.",
  "With the right diet, exercise, and dedication, it is possible to reach the goal of losing 10kg in 90 days.",
];

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
            defaultValue={outline}
            className="border resize-none border-[#DEE2DF] font-inter text-[13px] leading-[16px] font-medium px-[15px] py-[14px] rounded-[5px] w-full outline-none"
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default BlogOutlines;
