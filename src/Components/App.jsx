import styles from "../styles/style";
import {
  Blog,
  CTA,
  Features,
  Footer,
  Hero,
  Navbar,
  FAQs,
  ServiceDetailOne,
  ServiceDetailTwo,
  ServiceHeading,
  Testimonial,
  Clients,
} from "../Components/index";

const App = () => (
  <div className=" w-full overflow-hidden bg-darkBlue ">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkBlue`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX}  ${styles.flexStart}`}>
      <div className={` ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX}  ${styles.flexStart}`}>
      <div className={` ${styles.boxWidth}`}>
        <Clients />
      </div>
    </div>

    <div className={` ${styles.flexStart} ${styles.paddingX} ${styles.paddingY} bg-white`}>
      <div className={`${styles.boxWidth}`}>
        <ServiceHeading />
        <Features />
        <ServiceDetailOne /> 
        <ServiceDetailTwo />
      </div>
    </div>
    
    <div className={` ${styles.flexStart} ${styles.paddingX} bg-darkBlue`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonial />
      </div>
    </div>
    <div className={` ${styles.flexStart} ${styles.paddingX} bg-white `}>
      <div className={`${styles.boxWidth}`}>
        <FAQs />
        <Blog />
      </div>
    </div>

    <div className={` ${styles.flexStart} ${styles.paddingX} bg-white `}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Footer />
      </div>
    </div>
    
  </div>
);

export default App;
