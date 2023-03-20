import React from "react";
import Image from "next/image";
const TestimonialCard = ({ content, name, title, img, index }) => (
  <div className={`flex justify-between items-start gap-[2.5rem] flex-col px-10 py-8 max-w-[350px]  min-h-[322px] bg-white rounded-md hover:md:scale-[1.2] `}>
    <p className="text-[1.5rem] ">{content}</p>
    <div className="flex items-center gap-4 ">
      <div>
        <Image src={img} alt="" />
      </div>
      <div>
        <p className="text-[1rem] font-[700] text-darkBlue">{name}</p>
        <p className="text-[14px] text-darkBlue">{title}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
