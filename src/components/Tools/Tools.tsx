import { Button, Stack, Typography } from "@mui/material"
import {motion} from 'motion/react'
import image from '../../assets/Tools/img.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const styles={
    image:{
        width:700,
        height:600,
    },
    responsiveImage:{
        width:300,
        height:300
    },
    textStyles:{
        fontSize:{
            lg:60,
            md:60,
            sm:50,
            xs:50
        },
        color:"#050038",
        fontWeight:"bolder"
    },
    details:{
        color:"rgba(65, 60, 118, 0.8)",
        fontSize:18,
       width:{
            lg:"70%",
            md:"70%",
            sm:"100%",
            xs:"100%"
        }
    },
    button:{
        width:"fit-content",
        textTransform:"capitalize",
        fontSize:20,
        borderBottom:"1px solid #42a5f5",
        padding:0,
        borderRadius:0
    }
}
const Tools = () => {
  return (
    <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'} paddingBottom={30} >
        <Stack display={{lg:"flex",md:"flex",sm:"none",xs:"none"}}>
        <motion.img style={styles.image} src={image} 
        whileHover={{rotate:360}}
        transition={{ type:"spring",stiffness:150}}
        />
        </Stack>
        <Stack display={{lg:"none",md:"none",sm:"flex",xs:"flex"}}>
        <motion.img style={styles.responsiveImage} src={image} 
        whileHover={{rotate:360}}
        transition={{ type:"spring",stiffness:150}}
        />
        </Stack>
        <Stack  alignItems={'center'} justifyContent={'center'} >
            <Stack spacing={3} width={'70%'}>
            <Stack>
            <Typography sx={styles.textStyles}>Connect</Typography>
            <Typography sx={styles.textStyles}>your tools,</Typography>
            <Typography sx={styles.textStyles}>close your tabs</Typography>
            </Stack>
            <Typography sx={styles.details}>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</Typography>
            <Button variant="text" sx={styles.button} size="large" endIcon={<ArrowForwardIcon />}>Learn more</Button>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Tools