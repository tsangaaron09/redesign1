import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import logo from "../assets/toplogo.png";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    whole: {
      backgroundColor: "#e20074",
      display: "flex",
      flexDirection: "row",
      height: "8vh",
    },
    img: {
      height: "vh",
      marginRight: "2vh",
    },
    button: {
      backgroundColor: "white",
      margin: "1vh",
      color: "#e20074",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.whole}>
        <img src={logo} alt="tmobile logo" className={classes.img} />
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="tab panel"
          className={classes.tabs}
        >
          <Tab label="Plans" />
          <Tab label="Phones & Devices" />
          <Tab label="Deals" />
          <Tab label="5G Coverage" />
          <Tab label="Why TMobile" />
        </Tabs>
        <Button variant="outlined" className={classes.button}>
          My Account
        </Button>
      </AppBar>
      <TabPanel value={value} index={0}>
        Plans
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Two
      </TabPanel>
    </div>
  );
}
