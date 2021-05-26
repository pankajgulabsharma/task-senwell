import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid red",
  },
  image: {
    height: "50px",
    width: "150px",
    // border: "1px solid red",
  },

  buttonImage: {
    width: "20px",
    height: "20px",
  },
  headerbutton: {
    color: "#fff",
    background: "#6F6BD4",
    marginRight: theme.spacing(1),
  },
  shiftLeft: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.root}>
        <IconButton edge="start" color="inherit">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/imageslogo.png`}
            alt="logo"
            className={classes.image}
          />
        </IconButton>
        <div className={classes.shiftLeft}>
          <Button>HOME</Button>
          <Button>STORY</Button>
          <Button>CHARITY</Button>
          <Button>HELP</Button>
        </div>

        <div>
          <Button variant="contained" className={classes.headerbutton}>
            LOGIN
          </Button>
          <Button
            variant="outlined"
            startIcon={
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/unitedkingdom.png`}
                alt="buttonImgFlag"
                className={classes.buttonImage}
              />
            }
            endIcon={<ArrowDropDownIcon />}
          >
            English
          </Button>
        </div>
      </Toolbar>
      <Divider />
    </>
  );
};

export default Header;

//login 6F6BD4
//play 4AA25A
//1st  6F99C8
//2nd  EB2C21
//3rd  icon   D6334D
