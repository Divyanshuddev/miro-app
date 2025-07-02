import {motion} from 'motion/react'
import logo from '../../assets/Navbar/logo.svg'
const styles={
    root:{
        width:90,
        height:40,
        // border:"1px solid black"
    }
}
const Logo = () => {
  return (
    <motion.img src={logo} style={styles.root}
    initial={{y:"-100px"}}
    animate={{y:0}}
    transition={{delay:1,type:"spring",stiffness:50}}
    />

  )
}

export default Logo