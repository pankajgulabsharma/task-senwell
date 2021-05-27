import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(https://circaworks.com/wp-content/uploads/2020/12/what-makes-a-good-team.jpg)`,
    backgroundPosition: "center",
    padding: "70px 0px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainer: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4AA25A",
    borderRadius: "25px",
    color: "#fff",
    margin: "10px 0",
  },
  buttonCenter: {
    display: "flex",
    justifyContent: "center",
  },
});

const FeaturedPost = ({ title, subTitile, buttonText, desc }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer} variant="h3">
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {subTitile}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttonCenter}>
          <Button variant="contained" className={classes.button}>
            {buttonText}
          </Button>
        </CardActions>
        <CardContent>
          <Typography variant="body2" gutterBottom>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeaturedPost;
