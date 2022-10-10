import React, { useState, useEffect } from "react";
//import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Link,
  Tabs,
  TabItem,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const Home = () => {
    return (
        <View as="body">This is the Home section.</View>
    )
}


export default Home;