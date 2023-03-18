const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2:
      "font-manrope font-[700]  xs:leading-[76.8px] ss:text-[60px]  text-[48px] text-white leading-[72px] ss:leading-[100px]",
    heading1:
      "font-manrope font-[400]  xs:leading-[76.8px]  text-[48px]  leading-[72px] ",
    heading3:
      "font-manrope leading-[56px] text-[36px] max-w-[493px] ",
    paragraph:
      "font-manrope  font-normal text-[16px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-[8rem] px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export const buttonStyle ={
        heroButton: 'bg-darkBlue active:bg-mainGreen border-white active:border-none text-white active:text-darkBlue',
        darkBlueButton: 'bg-darkBlue active:bg-white border-darkBlue active:border-darkBlue text-white active:text-darkBlue',
        whiteButton: 'bg-white active:bg-darkBlue border-darkBlue active:border-none text-darkBlue active:text-white'
  }
  export const colors={
    darkBlue: 'darkBlue',
    white:'white',
    mainGreen: 'mainGreen',
  }
  
  export default styles;
  