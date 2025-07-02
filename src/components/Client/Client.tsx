import { Stack, Typography } from "@mui/material";
import img1 from "../../assets/Client/img1.svg";
import img2 from "../../assets/Client/img2.svg";
import img3 from "../../assets/Client/img3.svg";
import img4 from "../../assets/Client/img4.svg";
import img5 from "../../assets/Client/img5.svg";
import { motion } from "motion/react";

const styles = {
  imagesStyles: {
    width: 200,
    height: 200,
  },
  textStyles: {
    fontSize: 18,
    color: "gray",
  },
};
const Client = () => {
  return (
    <Stack spacing={8} paddingBottom={25}>
      <Typography alignSelf={"center"} sx={styles.textStyles} style={{marginRight:"100px"}}>
        Trusted by 45M+ users
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={img1}
          style={{ width: 100, height: 100 }}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={img2}
          style={{ width: 200, height: 100 }}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={img3}
          style={{ width: 200, height: 100 }}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={img4}
          style={{ width: 200, height: 100 }}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={img5}
          style={{ width: 200, height: 100 }}
        />
      </Stack>
    </Stack>
  );
};

export default Client;
