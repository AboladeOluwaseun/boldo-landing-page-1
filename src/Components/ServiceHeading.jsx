import styles from "../styles/style"
const ServiceHeading = () => {
  return (
    <div id="services" className={`${styles.marginY} sm:${styles.flexCenter} flex-1 flex-col gap-3 md:text-center`}>
          <p className={`${styles.paragraph} text-black`}>Our Services</p>
          <h1 className={`${styles.heading1} text-black max-w-[845px]`}>Handshake infographic mass market crowdfunding iteration.</h1>
    </div>
  )
}

export default ServiceHeading