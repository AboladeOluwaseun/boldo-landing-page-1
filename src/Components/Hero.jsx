import React from "react";
import Image from "next/image";
import styles, {colors, buttonStyle} from "../styles/style";
import Button from "./Button";
import heroGraphics from "../../public/assets/heroGraphics.png";
import ellipseBlue from '../../public/assets/ellipseBlue.png'
import { heroButtons } from "../constants";


const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row relative ${styles.paddingY} md:${styles.marginY}`}
    >
      <div className={`flex-1 ${styles.flexStart} relative z-[5]  w-full flex-col xl:px-0`}>
        <h1 className={`${styles.heading2}`}>
          Save time by building <br className="hidden sm:block" />
          fast with Boldo Template
        </h1>
        <p className={`${styles.paragraph} text-white max-w-[567px] mt-5`}>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>

        <div className="flex flex-col sm:flex-row gap-[2rem] mt-8">
          {heroButtons.map((button, index) => {
            return (
              <Button
                key={button.id}
                style={buttonStyle.heroButton}
                type={button.title}

              />
            );
          })}
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <Image
          src={heroGraphics}
          alt="heroGraphics"
          className="relative z-[5] w-[493.86px] h-[423px] object-contain "
        />
      </div>
      <div className="absolute top-[-200px]  right-[-180px] "><Image src={ellipseBlue}/></div>
    </section>
  );
};

export default Hero;
