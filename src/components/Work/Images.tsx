import image from '../../assets/Work/img.svg'
import { Box } from '@mui/material'
const styles={
    root:{
        width:{
          lg:800,
          md:800,
          sm:300,
          xs:300
        },
        height:{
          lg:700,
          md:700,
          sm:300,
          xs:300
        },
    }
}
const Images = () => {
  return (
    <Box component={'img'} src={image} sx={styles.root}
    />

  )
}

export default Images