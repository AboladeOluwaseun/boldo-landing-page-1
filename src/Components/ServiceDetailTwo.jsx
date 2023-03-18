import styles from "../styles/style";
import { service2 } from "../constants";
import woman from "../../public/assets/woman.png";
import Image from "next/image";

const ServiceDetailTwo = () => (
  <section className={` mt-[7.5rem] ${styles.flexCenter}`}>
    <div className={`${styles.flexCenter} flex-wrap-reverse  gap-2 md:gap-[9rem]`}>
      <div
        className={`flex-1 ${styles.flexStart} w-full flex-col gap-[4rem] xl:px-0`}
      >
        <div className="flex flex-col gap-[1.5rem]">
          <h1 className={` ${styles.heading3}`}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex flex-col gap-[1.5rem]">
            {service2.map((service, index) => {
              return (
                <div key={service.id} className={`flex items-center p-3 gap-[1.5rem] ${index ===0 ? 'bg-darkBlue text-white' : 'bg-white text-darkBlue'} `}>
                  <div className={`cursor-pointer p-1 `}>
                    <Image src={service.icon} alt="check" />
                  </div>
                  <p>{service.content}</p>
                </div>
              );
            })}
          </div>
        </div>
  
      </div>
      <div>
        <Image
          className="w-[444px] h-[692px] object-contain"
          src={woman}
          alt="happy-business-woman"
        />
      </div>
    </div>
  </section>
);

export default ServiceDetailTwo;
