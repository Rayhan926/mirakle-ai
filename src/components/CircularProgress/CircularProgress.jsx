import React from "react";

function CircularProgress(ownerState) {
  const {
    size = "100%",
    color,
    className = "",
    strokeWidth = 5,
    ...props
  } = ownerState;
  return (
    <svg
      className={`_svg_spinner ${className}`}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      {...props}
    >
      <circle
        className={"path"}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth={strokeWidth}
        style={{ stroke: color || "currentColor", strokeLinecap: "square" }}
      ></circle>
    </svg>
  );
}

export default CircularProgress;
