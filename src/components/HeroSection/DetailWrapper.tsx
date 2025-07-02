import {motion} from 'motion/react'
import type { ReactNode } from 'react'

type DetailWrapperProps={
    children:ReactNode;
    delay:number;
}
const DetailWrapper:React.FC<DetailWrapperProps> = ({children,delay}) => {
  return (
    <motion.div
     initial={{ y: "-100vh" }}
     animate={{ y: 0 }}
     transition={{ duration: 4, delay: delay, type:"spring", stiffness: 40 }}
    >
      {children}  
    </motion.div>
  )
}

export default DetailWrapper