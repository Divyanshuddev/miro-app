import { Divider, Stack } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import HeroSection from "../HeroSection/HeroSection"
import Client from "../Client/Client"
import Collaboration from "../Collaboration/Collaboration"
import Work from "../Work/Work"
import Tools from "../Tools/Tools"
import Culture from "../Culture/Culture"
import Teams from "../Teams/Teams"
import Company from "../Company/Company"
import Customers from "../Customers/Customers"

const styles={
  root:{
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10
  }
}
const Home = () => {
  return (
    <div>
        <Navbar />
        <Divider />
        <Stack sx={styles.root}>
          <HeroSection />
          <Client />
          <Collaboration />
          <Work />
          <Tools />
          <Culture />
          <Teams />
        </Stack>
          <Company />
          <Customers />
    </div>
  )
}

export default Home