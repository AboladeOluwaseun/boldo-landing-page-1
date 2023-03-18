import React from "react";
import styles from "../styles/style";
import office from "../../public/assets/office.png";
import arrowDown from "../../public/assets/arrowDown.png";
import { FAQ } from "../constants/index";
import Image from "next/image";


const FAQs = () => {
  return (
    <section
      className={`bg-white my-[4.5rem] sm:my-[7.8rem] ${styles.flexCenter} ${styles.paddingY}`}
    >
      <div>
        <div className="w-full">
          <Image src={office} alt="office" />
        </div>

        <div className={`w-full  flex flex-wrap justify-between mt-[3.5rem]`}>
          <h1 className={`${styles.heading3} `}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex flex-col mt-8 sm:mt-0 ">
            {FAQ.map((question, index) => {
              return (
                  <div key={question.id} className={`flex flex-col ${index===0 ? 'mt-0': 'mt-8'} `}>
                    <div className="flex mb-4 justify-between gap-8 items-center">
                      <p>{question.faq1}</p>
                      <div className=" cursor-pointer p-1  bg-darkBlue rounded-full">
                        <Image src={arrowDown} alt="check" />
                      </div>
                    </div>
                    <div className="border-[1px]   border-solid border-lightGrey"></div>
                  </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
