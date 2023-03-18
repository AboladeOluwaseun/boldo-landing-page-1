import styles, {colors, buttonStyle} from "../styles/style";
import Button from "./Button";
import check from "../../public/assets/check.png";
import man from "../../public/assets/man.png";
import { service1 } from "../constants";
import Image from "next/image";


const ServiceDetailOne = () => {
  return (
    <section className={` mt-[18rem] ${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap gap-2 md:gap-[9rem]`}>
        <div className>
          <Image
            className="w-[494px] h-[610px] object-contain"
            src={man}
            alt="happy-business-man"
          />
        </div>

        <div
          className={`flex-1 ${styles.flexStart} w-full flex-col gap-[2.5rem] xl:px-0`}
        >
          <div className="flex flex-col gap-[1.5rem]">
            <h1 className={`${styles.heading3}`}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
            <div className="flex flex-col gap-[1.5rem]">
              {service1.map((service, index) => {
                return (
                  <div key={service.id} className="flex gap-[1.2rem] ">
                    <div className=" cursor-pointer p-1  bg-darkBlue rounded-full">
                      <Image src={check} alt="check" />
                    </div>
                    <p>{service.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Button
              type={"Start now"}
               style={buttonStyle.darkBlueButton}
                
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailOne;
