import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ConfirmBeforeExitModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-[70px] right-4 lg:top-[85px] lg:right-[62px]"
      >
        <IoMdClose size={28} />
      </button>

      {isOpen && (
        <div
          id="modalOverlay"
          onClick={(e) => e.target.id === "modalOverlay" && close()}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center"
        >
          <div
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.06)" }}
            className="w-[90vw] sm:w-[450px] bg-white py-[22px] px-[25px] rounded-[5px]"
          >
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-xl font-medium text-dark">
                  Are you sure you want to exit?
                </h5>
                <p className="text-[15px] font-medium opacity-50">
                  All progress will be lost.
                </p>
              </div>

              <button onClick={close}>
                <IoMdClose size={24} />
              </button>
            </div>

            <div className="mt-[64px] flex justify-end gap-3">
              <button
                onClick={close}
                className="outline-none text-dark bg-white border border-dark w-[98px] rounded-[5px] py-[7px] text-[13px] px-[30px] hover:bg-dark hover:text-white duration-200"
              >
                Cancel
              </button>
              <button className="outline-none text-white bg-dark border border-dark w-[98px] rounded-[5px] py-[7px] text-[13px] px-[30px] hover:bg-white hover:text-dark duration-200">
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmBeforeExitModal;
