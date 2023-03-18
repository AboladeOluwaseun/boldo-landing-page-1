import React from "react";
import arrowForward from "../../public/assets/arrowForward.png";
import Image from "next/image";

const FeaturesCard = ({ index, image, title, content }) => {
  return (
    <div
      className={`flex flex-col gap-[1.75rem] max-w-[300px] mr-0 md:${
        index !== 2 ? "mr-[6rem]" : "mr-0"
      } cursor-pointer`}
    >
      <Image src={image} alt="" />
      <div className="flex flex-col gap-[1.75rem]">
        <div className="flex flex-col gap-[0.75rem]">
          <p className="text-[1.5rem] font-[400]">{title}</p>
          <p className="text-Gray text-[1.25rem]">{content}</p>
        </div>

        <div className="flex items-center gap-[0.75rem]">
          <p className="font-[700] text-darkBlue text-[1.25rem]">Explore Page</p>
          <Image src={arrowForward} alt="" />
        </div>
        <div className="border-[1px] mt-[-1rem] max-w-[164px] border-solid border-darkBlue"></div>
      </div>
    </div>
  );
};

export default FeaturesCard;
