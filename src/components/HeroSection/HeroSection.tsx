import { Stack } from "@mui/material"
import Details from "./Details"
import Image from "./Image"

const HeroSection = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} paddingBottom={30}>
        <Details />
        <Image />
    </Stack>
  )
}

export default HeroSection