import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import "../../App.css";
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
  Divider,
} from "@aws-amplify/ui-react";
import spaceapppng from "../../images/spaceapp.png";
import decisionassistantpng from "../../images/decision-assistant.png";
import doitnowpng from "../../images/do-it-now.png";


const Home = () => {
    return (
      <View as="main">
        <View
          as="section"
          className="portfolio-container">
            <Heading
              level={3}
              className="portfolio-heading">
                Projects
            </Heading>
            <Divider
              className="divider"
              orientation="horizontal" />
            <Heading
              className="portfolio-heading"
              level={4}>
                Personal Projects
            </Heading>
            <Flex
              className="project-grouping"
              justifyContent="space-around"
              alignItems="center"
              wrap="nowrap">
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Space App
                    </Heading>
                    <Link
                      href="https://carterwsheppard.github.io/space-app/">
                        <Image
                          alt="spaceapp screenshot"
                          className="portfolio-img"
                          src={spaceapppng} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Decision Assistant
                    </Heading>
                    <Link
                      href="https://decision-assistant.herokuapp.com/">
                        <Image
                          alt="decision-assistant screenshot"
                          className="portfolio-img"
                          src={decisionassistantpng} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Do It Now
                    </Heading>
                    <Link
                      href="https://bensdoitnow.herokuapp.com/">
                        <Image
                          alt="do-it-now screenshot"
                          className="portfolio-img"
                          src={doitnowpng} />
                    </Link>
                </View>
            </Flex>
            <Heading
              className="portfolio-heading"
              level={4}>
                Bootcamp Projects
            </Heading>
            <Flex
              className="project-grouping"
              justifyContent="space-around"
              alignItems="center"
              wrap="nowrap">
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Space App
                    </Heading>
                    <Link
                      href="https://carterwsheppard.github.io/space-app/">
                        <Image
                          alt="spaceapp screenshot"
                          className="portfolio-img"
                          src={spaceapppng} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Decision Assistant
                    </Heading>
                    <Link
                      href="https://decision-assistant.herokuapp.com/">
                        <Image
                          alt="decision-assistant screenshot"
                          className="portfolio-img"
                          src={decisionassistantpng} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Do It Now
                    </Heading>
                    <Link
                      href="https://bensdoitnow.herokuapp.com/">
                        <Image
                          alt="do-it-now screenshot"
                          className="portfolio-img"
                          src={doitnowpng} />
                    </Link>
                </View>
            </Flex>
            <Heading
              className="portfolio-heading"
              level={4}>
                Group Projects
            </Heading>
            <Flex
              className="project-grouping"
              justifyContent="space-around"
              alignItems="center"
              wrap="nowrap">
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Space App
                    </Heading>
                    <Link
                      href="https://carterwsheppard.github.io/space-app/">
                        <Image
                          alt="spaceapp screenshot"
                          className="portfolio-img"
                          src={spaceapppng} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Decision Assistant
                    </Heading>
                    <Link
                      href="https://decision-assistant.herokuapp.com/">
                        <Image
                          alt="decision-assistant screenshot"
                          className="portfolio-img"
                          src={decisionassistantpng} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Do It Now
                    </Heading>
                    <Link
                      href="https://bensdoitnow.herokuapp.com/">
                        <Image
                          alt="do-it-now screenshot"
                          className="portfolio-img"
                          src={doitnowpng} />
                    </Link>
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