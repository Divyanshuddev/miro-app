import { Button } from '@mui/material'
import {motion} from 'motion/react'
import LanguageIcon from '@mui/icons-material/Language';
const Language = () => {
  return (
    <motion.div
    initial={{y:"-100px"}}
    animate={{y:0}}
    transition={{delay:4.5,type:"spring",stiffness:70}}
    
    >
      <Button startIcon={<LanguageIcon />}>
        EN
      </Button>
    </motion.div>
  )
}

export default Language