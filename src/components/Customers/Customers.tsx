import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import img1 from "../../assets/Customers/img1.svg";
import img2 from "../../assets/Customers/img2.svg";
import img3 from "../../assets/Customers/img3.svg";
import { motion } from "motion/react";
const cardsData = [
  {
    image: img1,
    details:
      "“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”",
    profilePhoto:
      "https://tse4.mm.bing.net/th/id/OIP.4ixMoh5t43a8NWz1U6EQjgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Roxanne Mustafa",
    designation: "Design Team Lead at VMware",
  },
  {
    image: img2,
    details:
      "“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”",
    profilePhoto:
      "https://i.ytimg.com/vi/2JhwECknMM0/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAp4naXX96gcigppsHD_eft8tuJ5Q",
    name: "Jane Ashley",
    designation: "Head of Design at DocuSign",
  },
  {
    image: img3,
    details:
      "“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
    profilePhoto:
      "https://tse1.mm.bing.net/th/id/OIP._54rq54Ke7Qw_6FNtQ1rmAHaNM?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Laura Baird",
    designation: "Associate Design Director at frog",
  },
];
const styles = {
  root: {
    paddingLeft: {
      lg:20,
      md:20,
      sm:5,
      xs:5
    },
    paddingRight: {
      lg:20,
      md:20,
      sm:5,
      xs:5
    },
    paddingTop: {
      lg:10,
      md:10,
      sm:5,
      xs:5
    },
    paddingBottom: {
      lg:10,
      md:10,
      sm:5,
      xs:5
    },
    boxSizing:"border-box"
  },
  textStyles: {
    color: "#050038",
    fontSize: 60,
    fontWeight: "bolder",
  },
  button: {
    width: "fit-content",
    borderRadius: 10,
    padding: 2,
    textTransform: "capitalize",
  },
  box: {
    backgroundColor: "#050038",
    borderRadius: 4,
    padding: {
      lg: 15,
      md: 15,
      sm: 10,
      xs: 10,
    },
    width: {
      lg: "80%",
      md: "80%",
      sm: "100%",
      xs: 130,
    },
  },
  boxTextStyles: {
    color: "white",
    fontSize: {
      lg: 50,
      md: 50,
      sm: 20,
      xs: 20,
    },
    fontWeight: "bolder",
  },
  textBoxStyles: {
    color: "whitesmoke",
    fontSize: 18,
  },
  signUpButton: {
    padding: 2,
    textTransform: "capitalize",
    borderRadius: 10,
  },
};
const Customers = () => {
  return (
    <Stack sx={styles.root} spacing={20}>
      <Stack alignItems={"center"} spacing={5}>
        <Stack alignItems={"center"}>
          <Typography sx={styles.textStyles}>
            Loved by the world's best teams
          </Typography>
          <Button
            variant="outlined"
            sx={styles.button}
            endIcon={<ArrowRightAltIcon />}
          >
            See all customer stories
          </Button>
        </Stack>
        <Grid container spacing={{lg:30,md:30,sm:10,xs:10}}>
          {cardsData.map((value, index) => {
            return (
              <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }} key={index}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Stack spacing={0}>
                    <Box
                      component={"img"}
                      src={value.image}
                      sx={{ width: 200, height: 150 }}
                    />
                    <Stack height={170}>
                      <Typography color="#050038">{value.details}</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      <Avatar src={value.profilePhoto} />
                      <Stack>
                        <Typography color="gray">{value.name}</Typography>
                        <Typography color="gray">
                          {value.designation}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      <Stack sx={styles.box} alignItems={"center"} spacing={4} my={10}>
        <Stack alignItems={"center"}>
          <Typography sx={styles.boxTextStyles}>
            Join 45M+ users today
          </Typography>
          <Typography sx={styles.textBoxStyles}>
            Start for free — upgrade anytime.
          </Typography>
        </Stack>
        <Typography sx={styles.textBoxStyles} borderBottom={"1px solid gray"}>
          Joining as an organization? Contact Sales
        </Typography>
        <Button
          variant="contained"
          sx={styles.signUpButton}
          endIcon={<ArrowRightAltIcon />}
        >
          Sign up free
        </Button>
      </Stack>
    </Stack>
  );
};

export default Customers;
