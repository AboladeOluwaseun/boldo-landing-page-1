import { features } from "../constants"
import styles from "../styles/style"
import FeaturesCard from "./FeaturesCard"
const Features = () => 
   (
   <div className="flex flex-1 flex-col sm:flex-row flex-wrap gap-[6.25rem] my-[5rem] items-center justify-start sm:justify-center w-full relative z-[1]">
        {features.map((feature,index) =>{
          return <FeaturesCard index={index} key={feature.id} {...feature}/>
        })}
   </div>
  )



export default Features