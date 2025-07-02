import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../../assets/Teams/img1.svg";
import img2 from "../../assets/Teams/img2.svg";
import { motion } from "motion/react";
import CheckIcon from "@mui/icons-material/Check";
import icon1 from "../../assets/Teams/icon1.svg";
import icon2 from "../../assets/Teams/icon2.svg";
import icon3 from "../../assets/Teams/icon3.svg";

const iconsData = [icon1, icon2, icon3];

const styles = {
  button: {
    borderBottom: "1px solid #42a5f5",
    width: "fit-content",
    padding: 0,
    borderRadius: 0,
  },
  textStyles: {
    color: "#050038",
    fontSize: 60,
    fontWeight: "bolder",
  },
  subTextStyles: {
    color: "#050038",
    fontSize: 22,
  },
  details: {
    color: "gray",
    width: "60%",
    fontSize: 18,
  },
  pointText: {
    color: "gray",
    fontSize: 18,
  },
};
const Teams = () => {
  return (
    <Stack spacing={10} paddingBottom={30}>
      <Stack spacing={4}>
        <Typography sx={styles.textStyles}>
          Built for the way you work
        </Typography>
        <Stack direction={"row"} alignItems={"flex-start"}>
          <Stack spacing={3} my={5}>
            <Typography sx={styles.subTextStyles}>Brainstorming</Typography>
            <Typography sx={styles.details}>
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </Typography>
            <Button
              variant="text"
              sx={styles.button}
              endIcon={<ArrowForwardIcon />}
            >
              Learn more
            </Button>
          </Stack>
          <motion.img
            src={img1}
            style={{ width: "100%", height: 700 }}
            whileHover={{ scale: 1.1 }}
          />
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Typography sx={styles.textStyles}>
          Built for all kinds of teams
        </Typography>
        <Stack direction={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
          <Stack spacing={3} my={5}>
            <Stack spacing={3} >
              <Stack direction={"row"} alignItems={"center"} spacing={4}>
                <CheckIcon fontSize={"small"} />
                <Typography sx={styles.pointText}>
                  Build low-fi wireframes
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={4}>
                <CheckIcon fontSize={"small"} />
                <Typography sx={styles.pointText}>
                  Involve stakeholders in the design process
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={4}>
                <CheckIcon fontSize={"small"} />
                <Typography sx={styles.pointText}>
                  Run engaging design workshops
                </Typography>
              </Stack>
            </Stack>
            <Button
              variant="text"
              sx={styles.button}
              endIcon={<ArrowForwardIcon />}
            >
              Learn more
            </Button>
            <Stack spacing={3} my={7}>
              <Typography color="gray">
                Integrate your favorite tools
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={4}>
                {iconsData.map((value, index) => {
                  return (
                    <motion.img
                      src={value}
                      key={index}
                      style={{ width: 40, height: 40 }}
                      whileHover={{ scale: 1.2 }}
                    />
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
          <motion.img
            src={img2}
            style={{ width: "100%", height: 700 }}
            whileHover={{ scale: 1.1 }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Teams;
