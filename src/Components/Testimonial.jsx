import { feedback } from "../constants";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import styles from "../styles/style";
import arrowBackward from "../../public/assets/arrowBackward.png";
import arrowForward from "../../public/assets/arrowForward.png";
const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className={`${styles.paddingY} ${styles.flexCenter} ${styles.marginY} flex-col relative`}
    >
      <div
        className={`flex-1 ${styles.flexStart} gap-[7rem] md:gap-[4.5rem] flex-col xl:px-0`}
      >
        <h1 className={`${styles.heading3}  max-w-[625px] text-white`}>
          An enterprise template to ramp up your company website
        </h1>
        <div className="flex flex-wrap justify-center w-full gap-[1.4rem] relative">
          {feedback.map((feedback, index) => {
            return <TestimonialCard key={feedback.id} {...feedback} />;
          })}
        </div>
      </div>
      <div className="flex gap-8 absolute top-[20rem] xs:top-[13rem] right-5 sm:top-[7rem]  md:top-[8rem] md:right-[7rem]">
        <div className=" cursor-pointer ">
          <Image
            className="bg-white w-[62px] h-[62px] p-3 rounded-full  object-contain"
            src={arrowBackward}
            alt="arrow-backward"
          />
        </div>
        <div className=" cursor-pointer">
          <Image
            className="bg-white  w-[62px] h-[62px] p-3 rounded-full  object-contain"
            src={arrowForward}
            alt="arrow-backward"
          />
        </div>

        
      </div>
    </section>
  );
};

export default Testimonial;
