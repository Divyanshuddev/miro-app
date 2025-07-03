import { IconButton, Menu, MenuItem, Stack } from "@mui/material"
import * as motion from "motion/react-client"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const menuData=[
  "Product",
  "Solutions",
  "Resources",
  "Enterprise",
  "Pricing",
  "Contact",
  "Sales",
  "Login"
]
const style={
  root:{
    display:{lg:"none",md:"none",sm:"flex",xs:"flex"}
  }
}
const ResponsiveMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack sx={style.root}>
      <motion.div
      initial={{y:"-100px"}}
      animate={{y:0}}
      transition={{delay:2,type:"spring",stiffness:50}}
        >
          <IconButton
          id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          >
          <MenuIcon />
          </IconButton>
        </motion.div>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {
          menuData.map((value,index)=>{
            return(
              <MenuItem onClick={handleClose} key={index}>{value}</MenuItem>
            )
          })
        }
      </Menu>
      </Stack>
  )
}

export default ResponsiveMenu