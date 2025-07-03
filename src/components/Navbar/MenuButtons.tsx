import {  Stack } from "@mui/material"
import {motion} from 'motion/react'
const styles={
    root:{
        color:"#050038",
        backgroundColor:"white",
        fontSize:16,
        border:"none",
        cursor:"pointer",
        
    }
}
interface MenuButtonsType{
    title:string;
    delay:number;
}
type MenuButtonsProps={
    menuButtons:MenuButtonsType[]
}
const MenuButtons:React.FC<MenuButtonsProps> = ({menuButtons}) => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={3}
    display={{lg:"flex",md:"flex",sm:"none",xs:"none"}}
    >
        {
            menuButtons.map((value,index)=>{
                return(
                    <motion.div
                    key={index}
                    initial={{y:"-100px"}}
                    animate={{y:0}}
                    transition={{delay:value.delay,type:"spring",stiffness:50}}
                    >
                        <motion.button whileTap={{scale:1.3}} transition={{stiffness:50}}   style={styles.root}>{value.title}</motion.button>
                    </motion.div>
                )
            })
        }
    </Stack>
  )
}

export default MenuButtons