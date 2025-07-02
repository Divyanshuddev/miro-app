import { Button, Grid, Stack, Typography } from "@mui/material"
import {motion} from 'motion/react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const collaborateData=[
    {
        title:"Free forever",
        details:"Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features."
    },
    {
        title:"Easy integrations",
        details:"Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace ."
    },
    {
        title:"Security first",
        details:"We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center ."
    },
]

const styles={
    upperTextBox:{
        backgroundColor:"#FFD02F",
        width:"fit-content",
        padding:9,
        borderRadius:30,
        alignSelf:"flex-end"
    },
    upperText:{
        textTransform:"uppercase",
        fontWeight:"bolder",
        fontSize:13
    },
    textStyles:{
        color:"#050038",
        fontSize:60,
        fontWeight:"bolder"
    },
    cardsStyles:{
        padding:30,
        borderRadius:10,
        backgroundColor:"rgba(231, 231, 231, 0.8)"
    },
    cardsStylesBorder:{
        border:"1px solid black",
        borderRadius:10,
    },
    title:{
        color:"#050038",
        fontSize:28,
        fontWeight:"bolder"
    },
    details:{
      color:"rgba(65, 60, 118, 0.8)"  
    },
    signUpButton:{
        borderRadius:10,
        width:"fit-content",
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        paddingRight:5,
        fontSize:20,
        textTransform:"capitalize"

    }

}
const Collaboration = () => {
  return (
    <Stack spacing={10} paddingBottom={25}>
        <Stack alignSelf={'center'} width={'fit-content'}>
            <motion.div
            style={styles.upperTextBox}
            initial={{rotate:20}}
            whileHover={{rotate:0,scale:1.2}}
            transition={{type:"spring",stiffness:120}}
            >
                <Typography sx={styles.upperText}>Your Idea starts here</Typography>
            </motion.div>
            <Stack alignItems={'center'}>
            <Typography sx={styles.textStyles}>Collaborate without</Typography>
            <Typography sx={styles.textStyles}>constraints</Typography>
            </Stack>
        </Stack>
        <Grid container spacing={10}>
            {
                collaborateData.map((value,index)=>{
                    return(
                        <Grid key={index} size={4}>
                        <motion.div
                        style={styles.cardsStyles}
                        whileHover={{scale:1.2,y:-30}}
                        transition={{type:"spring",stiffness:200}}
                        >
                            <Stack spacing={2}>
                           <Typography sx={styles.title}>{value.title}</Typography> 
                           <Typography sx={styles.details}>{value.details}</Typography>
                           </Stack>
                        </motion.div>
                        </Grid>
                    )
                })
            }
        </Grid>
        <Stack alignItems={'center'}>
        <Button  size="large" variant="contained" endIcon={<ArrowRightAltIcon />} sx={styles.signUpButton} >Sign up free </Button>
        </Stack>
    </Stack>
  )
}

export default Collaboration