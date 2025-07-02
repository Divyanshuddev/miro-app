import { Grid, Stack, Typography } from "@mui/material"

const cardsData=[
    {
        title:"ISO",
        details:"ISO-27001 enterprise-grade security compliant"
    },
    {
        title:"#1",
        details:"Visual Collaboration Platform on G2"
    },
    {
        title:"99%",
        details:"of the Fortune 100 are customers"
    },
    {
        title:"1,000+",
        details:"community- and expert-built templates"
    },
    {
        title:"45M+",
        details:"users around the world"
    },
    {
        title:"100+",
        details:"integrations with technology partners"
    },
]
const styles={
    root:{
        backgroundColor:"#FFD02F",
        padding:20
    },
    textStyles:{
        color:"#050038",
        fontSize:50,
        fontWeight:"bolder"
    },
    sales:{
        color:"#050038",
        borderBottom:"1px solid #050038"
    },
    title:{
        color:"#050038",
        fontSize:50,
        fontWeight:"bolder"
    },
    details:{
        color:"#050038",
    }
}
const Company = () => {
  return (
    <Stack sx={styles.root} alignItems={'center'} spacing={6}> 
        <Stack alignItems={'center'}>
        <Typography sx={styles.textStyles}>Why companies large</Typography>
        <Typography sx={styles.textStyles}> and small trust Miro</Typography>
        <Typography sx={styles.sales}>Contact Sales to request a demo</Typography>
        </Stack>
        <Grid container spacing={10}>
            {
                cardsData.map((value,index)=>{
                    return(
                        <Grid size={4} key={index}>
                        <Stack alignItems={'center'} spacing={2}>
                            <Typography sx={styles.title}>{value.title}</Typography>
                            <Typography sx={styles.details}>{value.details}</Typography>
                        </Stack>
                        </Grid>
                    )
                })
            }
        </Grid>
    </Stack>
  )
}

export default Company