import { Stack } from "@mui/material"
import Details from "./Details"
import Image from "./Image"

const HeroSection = () => {
  return (
    <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'} justifyContent={{lg:"space-between",md:"space-between",sm:"center",xs:"center"}} paddingBottom={30}>
        <Details />
        <Image />
    </Stack>
  )
}

export default HeroSection