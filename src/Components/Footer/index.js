import { Badge, Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import FooterElement from "./FooterElement";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles({
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    // border: "1px solid red",
    backgroundColor: "#e8e8e8",
    // style={{ border: "1px solid red" }}
  },
  icon: {
    backgroundColor: "#F50057",
    color: "#fff",
    fontSize: "80px",
    borderRadius: " 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "cenrter",
    // border: "1px solid red",
    // width: "200px",
    // height: "200px",
  },
});

const Footer = () => {
  const classes = useStyles();

  const shopIcon = (
    <Badge badgeContent={1} color="secondary">
      <ShoppingCartOutlinedIcon className={classes.icon} s />
    </Badge>
  );

  const footerData = [
    {
      id: "1",
      img: `${process.env.PUBLIC_URL}/assets/images/euromillions.png`,
      title: "next euromillions jackpot",
      amount: "46M",
      date: "04-05-2021",
      button: "Play Euro millions",
    },
    {
      id: "2",
      img: `${process.env.PUBLIC_URL}/assets/images/euromillions.png`,
      title: "next Lotto jackpot",
      amount: "6M",
      date: "05-05-2021",
      button: "Play Lotto",
    },
    {
      id: "3",
      icon: shopIcon,
      title: "visit the store",
      desc: "visit our store to find wide range of available for a list item or provide navigational or orthogonal actions rela",
      button: "visit the store",
    },
  ];

  return (
    <footer className={classes.footer}>
      <Box px={{ xs: 1, sm: 2 }} py={{ xs: 1, sm: 2 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            // style={{ border: "1px solid red" }}
            className={classes.direction}
          >
            <Grid item xs={12} sm={4}>
              <FooterElement footerData={footerData[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FooterElement footerData={footerData[1]} redamount={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FooterElement footerData={footerData[2]} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
