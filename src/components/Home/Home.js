import React, { useState, useEffect } from "react";
//import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Tabs,
  TabItem,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import spaceapp from "./spaceapp.png";


const Home = () => {
    return (
      <View as="main">
        <View
          as="section"
          className="portfolio-container">
            <Flex
              justifyContent="space-around"
              alignItems="center"
              wrap="wrap">
                <View
                flex-basis="25%"
                className="portfolio-item">
                <View
                  as="img"
                  src={spaceapp}
                  alt="spaceapp" />
                </View>
                <View
                flex-basis="50%"
                className="portfolio-item emphasized-portfolio-item">
                  Portfolio item 2
                </View>
                <View
                flex-basis="25%"
                className="portfolio-item">
                  Portfolio item 3
                </View>
            </Flex>
        </View>
        <View
          as="section"
          className="about-website">
            This will contain info about the website and features to come.
        </View>
        <View
          as="section"
          className="about-me">
            This will contain information about me such as skills, background, preparation, and moving forward.
        </View>
      </View>
    )
}


export default Home;