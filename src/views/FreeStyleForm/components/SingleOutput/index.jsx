import useFreeStyleForm from "@hooks/useFreeStyleForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import TextareaAutosize from "react-textarea-autosize";

const btn =
  "px-2 md:px-3 py-[5px] md:py-[7px] border border-[#DEE2DF] shadow-[0px_4px_4px_rgba(0,0,0,0.04)] rounded-[3px] flex text-[10px] sm:text-[12px] font-medium items-center gap-1.5 hover:bg-[#DEE2DF]/10 duration-200 active:scale-[0.9]";

// https://stackoverflow.com/a/30810322/13435001
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}

const SingleOutput = ({ text, id }) => {
  const { removeOutput, updateOutput } = useFreeStyleForm();
  const charLength = text?.length;
  const wordCount = !text ? 0 : text.trim().split(/\s+/).length;
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = () => {
    copyTextToClipboard(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="w-full pb-5 lg:pb-7 pt-3 lg:pt-5 border-b border-[#F1F1F1] px-4 lg:px-11">
      <TextareaAutosize
        value={text}
        onChange={(e) => updateOutput(id, { text: e.target.value })}
        className="w-full outline-none font-medium overflow-hidden border border-white focus:border-[#6861FF] focus:bg-softGray/20 duration-200 rounded-[5px] py-3 px-2.5 text-[16px] leading-[18.5px] resize-none"
      />

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button className={btn} onClick={copyHandler}>
          <div className="shrink-0">
            {isCopied ? (
              <BiCheck className="opacity-50" size={16} />
            ) : (
              <Icon src={"/img/copy.png"} />
            )}
          </div>
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

const Icon = ({ src }) => (
  <Image className="shrink-0" src={src} alt="Icon" width={12} height={12} />
);
