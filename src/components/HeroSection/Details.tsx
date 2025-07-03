import { Button, Rating, Stack, Typography } from "@mui/material";
import DetailWrapper from "./DetailWrapper";
import { Input } from "@mui/joy";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import img1 from "../../assets/HeroSection/img1.svg";
import img2 from "../../assets/HeroSection/img2.svg";
import img3 from "../../assets/HeroSection/img3.svg";
import { motion } from "motion/react";
const styles = {
  textStyles: {
    fontSize: {
      lg:60,
      md:50,
      sm:30,
      xs:30
    },
    fontWeight: "bolder",
    color: "#050038",
  },
  detailStyles: {
    color: "#050038",
    fontSize: {
      lg:18,
      ms:18,
      sm:13,
      xs:13
    },
  },
  input: {
    borderRadius: 60,
    padding: 2,
    fontSize: {
      lg:18,
      ms:18,
      sm:14,
      xs:14
    },
    width:{
      lg:"100%",
      md:"100%",
      sm:"100%",
      xs:"100%"
    }
  },
  signUpButton: {
    width: {
      lg:"100%",
      md:"100%",
      sm:"100%",
      xs:"100%"
    },
    padding: 1.5,
    fontSize: {
      lg:18,
      ms:18,
      sm:14,
      xs:14
    },
    textTransform: "capitalize",
    borderRadius: 60,
  },
  ratingBox: {
    backgroundColor: "#F5F5F7",
    padding: 2,
  },
  ratingText: {
    color: "#050038",
    fontSize: 15,
  },
  imageStyles: {
    width: 100,
    height: 50,
  },
  collaborate:{
    fontSize:{
      lg:16,
      md:16,
      sm:14,
      xs:14
    }
  }
};
const Details = () => {
  return (
    <Stack spacing={3} >
      <Stack spacing={{lg:-2,md:-2,sm:-1,xs:-1}} alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}}>
        <DetailWrapper delay={3}>
          <Typography sx={styles.textStyles}>Take ideas from</Typography>
        </DetailWrapper>
        <DetailWrapper delay={3.5}>
          <Typography sx={styles.textStyles}>better to best</Typography>
        </DetailWrapper>
      </Stack>
      <DetailWrapper delay={4} >
        <Typography sx={styles.detailStyles} >
          Miro is your team's virtual platform to connect<br></br> collaborate,
          and create - together
        </Typography>
      </DetailWrapper>
      <Stack spacing={3}>
        <DetailWrapper delay={4.5}>
          <Input sx={styles.input} placeholder="Enter your work email" />
        </DetailWrapper>
        <Stack spacing={1}>
          <DetailWrapper delay={5}>
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={styles.signUpButton}
            >
              Sign up details
            </Button>
          </DetailWrapper>
          <DetailWrapper delay={5.5}>
            <Typography color="gray" sx={styles.collaborate}>
              Collaborate with your team within minutes
            </Typography>
          </DetailWrapper>
        </Stack>
        <DetailWrapper delay={6}>
          <Stack sx={styles.ratingBox} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={"center"} spacing={2}>
            <Stack alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}}>
              <Rating
                name="half-rating"
                defaultValue={5}
                precision={5}
                readOnly
              />
              <Typography sx={styles.ratingText}>
                Based on 5149+ reviews:
              </Typography>
            </Stack>
            <motion.img 
              whileHover={{ scale: 1.2 }}
              transition={{ stiffness: 50 }}
              src={img1}
              style={styles.imageStyles}
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ stiffness: 50 }}
              src={img2}
              style={styles.imageStyles}
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ stiffness: 50 }}
              src={img3}
              style={styles.imageStyles}
            />
          </Stack>
        </DetailWrapper>
      </Stack>
    </Stack>
  );
};

export default Details;
