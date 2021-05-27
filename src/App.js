import { Button, Container, Divider } from "@material-ui/core";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

const App = () => {
  return (
    <>
      <Header />
      <Content
        title={`More Chance To win for Less`}
        subTitile={`Ready-Made Syndicate Where We Manage EveryThing For You`}
        buttonText={`JOIN NOW`}
        desc={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text`}
      />
      <Footer />
    </>
  );
};

export default App;
