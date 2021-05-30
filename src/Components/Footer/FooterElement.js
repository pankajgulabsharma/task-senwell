import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import clsx from "clsx";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "85%",
    // border: "1px solid red",
  },
  button: {
    backgroundColor: "#4AA25A",
    borderRadius: "25px",
    color: "#fff",
    width: "100%",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "15px",
  },
  greenamount: {
    color: "#6F99C8",
  },
  redamount: {
    color: "#EB2C21",
  },
  amouticon: {
    fontSize: "50px",
  },
  border: {
    border: "1px solid red",
  },
});
const FooterElement = ({ footerData = {}, redamount = null }) => {
  const { title, amount, date, button, desc, img, icon } = footerData;
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {img && (
        <Grid item xs={4}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/euromillions.png`}
            alt="euromillions.png"
            className={classes.image}
          />
        </Grid>
      )}
      {icon && (
        <Grid item xs={4}>
          {icon}
        </Grid>
      )}
      <Grid item xs={8}>
        {title && <Typography className={classes.title}>{title}</Typography>}
        {amount && (
          <Typography
            variant="h2"
            className={clsx(classes.greenamount, {
              [classes.redamount]: redamount,
            })}
          >
            <EuroSymbolIcon className={classes.amouticon} />
            {amount}
          </Typography>
        )}
        {date && <Typography>Draw Date.{date}</Typography>}
        {desc && <Typography>{desc}</Typography>}
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" className={classes.button}>
          {button}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FooterElement;

{
  /* <CardMedia
className={clsx(
  classes.cardmedia,
  { [classes.grow]: grow },
  { [classes.blogCard]: blogMedia }
)}
image={image}
/> */
}
