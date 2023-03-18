import React from "react";
import { clients } from "../constants/index";
import styles from "../styles/style";
import Image from "next/image";
const Clients = () => {
  return (
  
    <section className={` ${styles.flexCenter} ${styles.marginY} relative `}>
    <div className="absolute top-0 left-0 bg-black-gradient  w-[100%] h-[100%] z-[2] "></div>
    <div className="absolute top-0 left-0 bg-black-gradient2  w-[100%] h-[100%] z-[2] "></div>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map((client, index) => {
          return (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} mt-3 ss:mt-0 sm:min-w-[142px] min-w-[120px]`}>
              <Image
                src={client.logo}
                alt="logo"
                className="sm:w-[142px] w-[100px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
