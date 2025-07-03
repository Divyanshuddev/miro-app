import { Box } from '@mui/material'
import img from '../../assets/HeroSection/img4.svg'
import {motion} from 'motion/react'
const styles={
  root:{
    width:{
      lg:800,
      md:800,
      sm:300,
      xs:300
    },
    height:{
      lg:600,
      md:600,
      sm:300,
      xs:300
    },

  }
}
const Image = () => {
  return (
    <motion.div
    initial={{y:"-500vh"}}
    animate={{y:0}}
    transition={{delay:4,type:"spring",stiffness:50}}
    >
      <Box component={'img'} src={img} sx={styles.root} />
    </motion.div>
  )
}

export default Image