import img from '../../assets/HeroSection/img4.svg'
import {motion} from 'motion/react'
const styles={
  root:{
    width:800,
    height:600,
  }
}
const Image = () => {
  return (
    <motion.div
    initial={{y:"-100vh"}}
    animate={{y:0}}
    transition={{delay:4,type:"spring",stiffness:50}}
    >
      <motion.img whileHover={{scale:1.2}} transition={{stiffness:40}} src={img} style={styles.root} />
    </motion.div>
  )
}

export default Image