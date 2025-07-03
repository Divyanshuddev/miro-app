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
import Footer from "../Footer/Footer"

const styles={
  root:{
    paddingLeft:{
      lg:20,
      md:20,
      sm:5,
      xs:5
    },
    paddingRight:{
      lg:20,
      md:20,
      sm:5,
      xs:5
    },
    paddingTop:{
      lg:10,
      md:10,
      sm:5,
      xs:5
    },
    paddingBottom:{
      lg:10,
      md:10,
      sm:5,
      xs:5
    },
    boxSizing:"border-box"
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
          <Footer />
    </div>
  )
}

export default Home