import { Button, Stack, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Images from "./Images";
const styles={
    textStyles:{
        fontSize:60,
        color:"#050038",
        fontWeight:"bolder"
    },
    details:{
        color:"rgba(65, 60, 118, 0.8)",
        fontSize:18,
        width:"50%"
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
const Work = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} paddingBottom={10}>
        <Stack spacing={3}>
            <Stack>
            <Typography sx={styles.textStyles}>Work together, </Typography>
            <Typography sx={styles.textStyles}>wherever you work</Typography>
            </Stack>
            <Typography sx={styles.details}>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</Typography>
            <Button variant="text" sx={styles.button} size="large" endIcon={<ArrowForwardIcon />}>Learn more</Button>
        </Stack>
        <Images />
    </Stack>
  )
}

export default Work