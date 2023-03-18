import styles from "@/styles/style";
import Image from "next/image";
import boldo03 from "../../public/assets/boldo03.png";
import { footerLinks } from "@/constants";
import { useState } from "react";
const Footer = () => {
  const [hiring, setHiring] = useState(true);
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row md:gap-[11rem] flex-col mb-8 w-full`}
      >
        <div className="max-w-[300px] flex flex-col gap-[4rem]">
          <div className="flex flex-col gap-[2.5rem]">
            {" "}
            <Image src={boldo03} alt="logo" className=" object-contain" />
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <p>All rights reserved.</p>
        </div>

        <div className="flex-[1.5] flex flex-row w-full justify-between gap-24  flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink, index) => {
            return (
              <div
                key={footerlink.key}
                className="flex flex-col ss:my-0 my-4 gap-8 text-[20px] min-w-[150px]"
              >
                <h4 className="font-[700]">{footerlink.title}</h4>
                <ul className="flex flex-col gap-8">
                  {footerlink.links.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className=" text-[20px] leading-[24px] text-Gray  font-normal cursor-pointer"
                      >
                        {link.name}{" "}
                        {hiring && link.name === "Careers" && (
                          <span className="bg-mainGreen text-[13px] font-[700] text-darkBlue px-3 py-2 rounded-full">
                            hiring!
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
