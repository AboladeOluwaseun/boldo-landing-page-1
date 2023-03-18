import React from "react";
import arrowForward from "../../public/assets/arrowForward.png";
import Image from "next/image";

const BlogCard = ({ date, author, authorImg, blogImg, content, index }) => {
  return (
    <div
      className={`flex flex-col gap-[1.75rem] max-w-[298px] mr-0 md:${
        index !== 2 ? "mr-[6rem]" : "mr-0"
      } cursor-pointer`}
    >
      <Image src={blogImg} alt="" />
      <div className="flex flex-col gap-[1.75rem]">
        <div className="flex flex-col gap-[0.75rem]">
          <div className="flex gap-3 text-[16px]">
            <p className="font-[700] text-darkBlue">Category</p>{" "}
            <p className="text-Gray">{date}</p>
          </div>
          <p className="text-darkBlue text-[20px]">{content}</p>
        </div>

        <div className="flex items-center gap-5 ">
          <div>
            <Image src={authorImg} alt="img" />
          </div>
          <div>
            <p className="text-[1rem] ">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
