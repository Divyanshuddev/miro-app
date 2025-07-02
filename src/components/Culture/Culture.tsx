import { Stack } from '@mui/material'
import image from '../../assets/Culture/img.svg'
const Culture = () => {
  return (
    <Stack paddingBottom={30}>
      <img src={image} style={{width:"100%",height:700,objectFit:"cover"}}></img>
    </Stack>
  )
}

export default Culture