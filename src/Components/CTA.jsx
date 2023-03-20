import React from "react";
import { Button } from "../Components";
import styles, { buttonStyle } from "@/styles/style";
import Image from "next/image";
import ellipseBlue02 from '../../public/assets/ellipseBlue02.png'

const CTA = () => {
  return (
    <div
      className={` ${styles.flexCenter} relative my-12 md:my-[7.75rem] xl:px-0 rounded-md bg-darkBlue`}
    >
      <div className={`flex-1 flex max-w-full flex-col items-start sm:items-center py-12 md:py-[4.5rem] gap-12 px-16 sm:px-10 md:px-48 xl:px-0`}>
        <h1 className={` text-[36px] sm:text-[48px] relative z-[5] sm:font-[700] max-w-[842px] text-start sm:text-center text-white`}>
          An enterprise template to ramp up your company website
        </h1>

        <form
          className="flex flex-wrap flex-col ss:flex-row justify-start ss:justify-center  flex-1 gap-[1.5rem]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Your email address"
            className=" pl-[2rem] py-[0.75rem] pr-0  sm:pr-[10rem] max-w-full outline-none rounded-full"
            type="text"
          />
          <Button type={"Start now"} style={buttonStyle.darkGreenButton} />
        </form>
      </div>
      <div className="absolute top-[0px]  right-[0px] "><Image src={ellipseBlue02}/></div>
    </div>
  );
};

export default CTA;
