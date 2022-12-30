import useInstagramCaptionFormV2 from "@hooks/useInstagramCaptionFormV2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";

const btn =
  "px-3 py-[7px] border border-[#DEE2DF] shadow-[0px_4px_4px_rgba(0,0,0,0.04)] rounded-[3px] flex text-[12px] font-medium items-center gap-1.5 hover:bg-[#DEE2DF]/10 duration-200 active:scale-[0.9]";

const SingleOutput = ({ text, id }) => {
  const { removeOutput, updateOutput } = useInstagramCaptionFormV2();
  const charLength = text?.length;
  const wordCount = !text ? 0 : text.trim().split(/\s+/).length;
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch(() => alert("Failed to copy"));
  };

  return (
    <div className="w-full pb-7 pt-5 border-b border-[#F1F1F1] px-11">
      <textarea
        value={text}
        onChange={(e) => updateOutput(id, { text: e.target.value })}
        className="w-full outline-none border border-white focus:border-[#6861FF] focus:bg-softGray/20 duration-200 rounded-[5px] py-3 px-2.5 text-[14px] resize-none"
      >
        {text}
      </textarea>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button className={btn} onClick={copyHandler}>
          {isCopied ? (
            <BiCheck className="opacity-50" size={16} />
          ) : (
            <Icon src={"/img/copy.png"} />
          )}{" "}
          {isCopied ? "Copied" : "Copy"}
        </button>
        <Link href={"#open-document"} className={btn}>
          <Icon src={"/img/file.png"} /> Open Document
        </Link>
        <button className={btn} onClick={() => removeOutput(id)}>
          <Icon src={"/img/cross.png"} /> Remove
        </button>

        <span className="text-[10px] text-[#D9D9D9] !ml-0.5 font-medium">
          {wordCount} word{wordCount > 0 ? "s" : ""} - {charLength} char
          {charLength > 0 ? "s" : ""}
        </span>
      </div>
    </div>
  );
};

export default SingleOutput;

const Icon = ({ src }) => <Image src={src} alt="Icon" width={12} height={12} />;
