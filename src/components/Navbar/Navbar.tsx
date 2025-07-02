import { Stack } from "@mui/material"
import Logo from "./Logo"
import MenuButtons from "./MenuButtons"
import Language from "./Language"
import SignUpButton from "./SignUpButton"

const firstMenuButtons=[
  {
        title:"Product",
        delay:1.5,
    },
    {
        title:"Solutions",
        delay:2,
    },
    {
        title:"Resources",
        delay:2.5,
    },
    {
        title:"Product",
        delay:3,
    },
    {
        title:"Enterprise",
        delay:3.5,
    },
    {
        title:"Pricing",
        delay:4,
    },
]
const secondMenuButtons=[
  {
        title:"Contact",
        delay:5,
    },
    {
        title:"Sales",
        delay:5.5,
    },
    {
        title:"Login",
        delay:6,
    },
]

const styles={
    root:{
        padding:2
    }
}

const Navbar = () => {
  return (
    <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={'row'} alignItems={'center'} spacing={4}>
        <Logo />
        <MenuButtons menuButtons={firstMenuButtons} />
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Language />
          <MenuButtons menuButtons={secondMenuButtons} />
          <SignUpButton />
        </Stack>
    </Stack>
  )
}

export default Navbar