import { Grid, Stack, Typography } from "@mui/material";
import {motion} from 'motion/react'
const footerData = [
  {
    title: "Product",
    menu: [
      "Online whiteboard",
      "Apps & Integrations",
      "Templates",
      "Miroverse",
      "Miro Developer Platform",
      "Miro for Devices",
      "Security & Compliance",
      "Accessibility",
      "Changelog",
    ],
  },
  {
    title: "Solutions",
    menu: [
      "Meetings and Workshops",
      "Brainstorming & Ideation",
      "Agile Workflows",
      "Diagramming",
      "Research & Design",
      "Strategy & Planning",
      "Mind Map",
      "Concept Map",
      "Online Sticky Notes",
      "Flowchart",
      "Wireframing",
    ],
  },
  {
    title: "Resources",
    menu: [
      "Miro Academy",
      "Help Center",
      "Blog",
      "Status",
      "Miro Community",
      "Miro Professional Network",
      "Miro Experts Directory",
      "Miro Events",
    ],
  },
  {
    title: "Company",
    menu: ["About us", "Careers", "Miro in the News", "Customer Stories"],
  },
  {
    title: "Plans and Pricing",
    menu: [
      "Pricing",
      "Business",
      "Enterprise",
      "Consultants",
      "Education",
      "Startups",
      "NPOS",
    ],
  },
];
const styles={
  root:{
    backgroundColor:"#050038",
    padding:5
  },
  title:{
    color:"white",
    fontSize:22,
    fontWeight:"bolder"
  },
  menu:{
    color:"white",
    fontSize:18,
    cursor:"pointer",
    "&:hover":{
      borderBottom:"1px solid white",
      width:"fit-content"
    }
  }
}
const Footer = () => {
  return (<Grid sx={styles.root} container spacing={3}>
    {
      footerData.map((value,index)=>{
        return(
          <Grid size={{lg:2.4,md:2.4,sm:12,xs:12}} key={index}>
            <Stack spacing={2}>
            <Typography sx={styles.title}>{value.title}</Typography>
            <Stack spacing={1}>
              {
                value.menu.map((e,i)=>{
                  return(
                    <motion.div key={i}
                    whileHover={{x:15}}
                    >
                    <Typography  sx={styles.menu}>{e}</Typography>
                    </motion.div>
                  )
                })
              }
            </Stack>
            </Stack>
          </Grid>
        )
      })
    }
  </Grid>);
};

export default Footer;
