import { Box, Stack } from '@mui/material'
import image from '../../assets/Culture/img.svg'
const styles={
  root:{
    width:"100%",
    height:{
      lg:700,
      md:700,
      sm:200,
      xs:200
    },
    objectFit:"cover"
  }
}
const Culture = () => {
  return (
    <Stack paddingBottom={30}>
      <Box component={'img'} src={image} sx={styles.root}></Box>
    </Stack>
  )
}

export default Culture