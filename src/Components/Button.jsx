import React from "react";

const Button = ({
  type,
 style
}) => {
  return (
    <button
      className={`cursor-pointer px-[56px] py-[16px] mt-4 md:mt-0 font-[700] border-[1px] rounded-full ${style} `}
    >
      {type}
    </button>
  );
};

export default Button;
