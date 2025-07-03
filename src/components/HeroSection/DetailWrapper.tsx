import { Stack } from '@mui/material';
import {motion} from 'motion/react'
import type { ReactNode } from 'react'

type DetailWrapperProps={
    children:ReactNode;
    delay:number;
}
const DetailWrapper:React.FC<DetailWrapperProps> = ({children,delay}) => {
  return (
    <motion.div
     initial={{ y: "-200vh" }}
     animate={{ y: 0 }}
     transition={{ duration: 4, delay: delay, type:"spring", stiffness: 40 }}
    >
      <Stack alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}}>
      {children} 
      </Stack> 
    </motion.div>
  )
}

export default DetailWrapper