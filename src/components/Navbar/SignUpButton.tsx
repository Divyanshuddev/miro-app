import { Button } from '@mui/material'
import {motion} from 'motion/react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const styles={
    root:{
        textTransform:"capitalize",
        borderRadius:10,
        paddingLeft:3,
        paddingRight:3,
        paddingTop:1,
        paddingBottom:1
    }
}
const SignUpButton = () => {
  return (
    <motion.div
    initial={{y:"-100px"}}
    animate={{y:0}}
    transition={{delay:6.5,type:"spring",stiffness:50}}
    >
        <Button variant='contained' sx={styles.root} endIcon={<ArrowRightAltIcon />}>Sign up free</Button>
    </motion.div>
  )
}

export default SignUpButton