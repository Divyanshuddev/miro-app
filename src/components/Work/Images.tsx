import {motion} from 'motion/react'
import image from '../../assets/Work/img.svg'
const styles={
    root:{
        width:800,
        height:700,
    }
}
const Images = () => {
  return (
    <motion.img src={image} style={styles.root}
    whileHover={{scale:1.3}}
    />

  )
}

export default Images