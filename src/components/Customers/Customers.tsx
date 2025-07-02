import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img1 from '../../assets/Customers/img1.svg'
import img2 from '../../assets/Customers/img2.svg'
import img3 from '../../assets/Customers/img3.svg'
import {motion} from 'motion/react'
const cardsData=[
  {
    image:img1,
    details:"“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”",
    profilePhoto:"https://tse4.mm.bing.net/th/id/OIP.4ixMoh5t43a8NWz1U6EQjgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    name:"Roxanne Mustafa",
    designation:"Design Team Lead at VMware"
  },
  {
    image:img2,
    details:"“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”",
    profilePhoto:"https://i.ytimg.com/vi/2JhwECknMM0/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAp4naXX96gcigppsHD_eft8tuJ5Q",
    name:"Jane Ashley",
    designation:"Head of Design at DocuSign"
  },
  {
    image:img3,
    details:"“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
    profilePhoto:"https://tse1.mm.bing.net/th/id/OIP._54rq54Ke7Qw_6FNtQ1rmAHaNM?rs=1&pid=ImgDetMain&o=7&rm=3",
    name:"Laura Baird",
    designation:"Associate Design Director at frog"
  },
]
const styles = {
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textStyles:{
    color:"#050038",
    fontSize:60,
    fontWeight:"bolder"
  },
  button:{
    width:"fit-content",
    borderRadius:10,
    padding:2,
    textTransform:"capitalize"
  },
  box:{
    backgroundColor:""
  }
};
const Customers = () => {
  return (
  <Stack sx={styles.root} alignItems={'center'} spacing={5}>
    <Stack alignItems={'center'}>
    <Typography sx={styles.textStyles}>Loved by the world's best teams</Typography>
    <Button variant="outlined" sx={styles.button} endIcon={<ArrowRightAltIcon />}>See all customer stories</Button>
    </Stack>
    <Grid container spacing={30}>
      {
        cardsData.map((value,index)=>{
          return(
            <Grid size={4} key={index}>
              <motion.div
              whileHover={{scale:1.2}}
              >
                <Stack spacing={0}>
                  <Box component={'img'} src={value.image} sx={{width:200,height:150}} />
                  <Stack height={170}>
                  <Typography color="#050038">{value.details}</Typography>
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Avatar src={value.profilePhoto} />
                    <Stack >
                      <Typography color="gray">{value.name}</Typography>
                      <Typography color="gray">{value.designation}</Typography>
                    </Stack> 
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
          )
        })
      }
    </Grid>
    <Stack>

    </Stack>
  </Stack>);
};

export default Customers;
