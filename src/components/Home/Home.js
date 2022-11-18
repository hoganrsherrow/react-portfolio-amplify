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
import readme from "../../images/readme-generator.png";
import teamprofile from "../../images/team-profile-generator.png";
import employeetracker from "../../images/employee-tracker.png";
import selfDrivingCar from "../../images/self-driving-car.png";
import dailyPlanner from "../../images/daily-planner.png";
import openWeather from "../../images/open-weather.png";


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
                AI
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
                        Self-Driving Car
                    </Heading>
                    <Link
                      href="https://hoganrsherrow.github.io/self-driving-car-js/">
                        <Image
                          alt="spaceapp screenshot"
                          className="portfolio-img"
                          src={selfDrivingCar} />
                    </Link>
                </View>
                {/* <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Currency Converter
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
                        Attendance Management System
                    </Heading>
                    <Link
                      href="https://bensdoitnow.herokuapp.com/">
                        <Image
                          alt="do-it-now screenshot"
                          className="portfolio-img"
                          src={doitnowpng} />
                    </Link>
                </View> */}
            </Flex>
            <Heading
              className="portfolio-heading"
              level={4}>
                Full Stack
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
                        MERN Stack
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
                Backend
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
                        README Generator
                    </Heading>
                    <Link
                      href="https://github.com/hoganrsherrow/readme-generator">
                        <Image
                          alt="readme-generator screenshot"
                          className="portfolio-img"
                          src={readme} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Team Profile Generator
                    </Heading>
                    <Link
                      href="https://github.com/hoganrsherrow/team-profile-generator">
                        <Image
                          alt="team-profile-generator screenshot"
                          className="portfolio-img"
                          src={teamprofile} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Employee Tracker
                    </Heading>
                    <Link
                      href="https://github.com/hoganrsherrow/employee-tracker">
                        <Image
                          alt="do-it-now screenshot"
                          className="portfolio-img"
                          src={employeetracker} />
                    </Link>
                </View>
            </Flex>
            <Heading
              className="portfolio-heading"
              level={4}>
                Frontend
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
                        Daily Planner
                    </Heading>
                    <Link
                      href="https://hoganrsherrow.github.io/daily-planner/">
                        <Image
                          alt="daily planner screenshot"
                          className="portfolio-img"
                          src={dailyPlanner} />
                    </Link>
                </View>
                <View
                  className="portfolio-item">
                    <Heading
                      level={6}
                      className="portfolio-heading">
                        Open Weather App
                    </Heading>
                    <Link
                      href="https://hoganrsherrow.github.io/open-weather/">
                        <Image
                          alt="open-weather screenshot"
                          className="portfolio-img"
                          src={openWeather} />
                    </Link>
                </View>
            </Flex>
        </View>
        <View
          as="section"
          className="about-me">
            <Heading
              className="portfolio-heading"
              level={3}>
                About Me
            </Heading>
            <Divider
              className="divider"
              orientation="horizontal" />
            <Text as="p">
              Hello! My name is Hogan, and I am a developer currently seeking an entry level software engineering or 
              fullstack web development position. Since graduating from Vanderbilt University in Nashville, TN, with a 
              Bachelor of Arts in Economics and a minor in Chemistry, I have been working as an HR supervisor for a corporate 
              division of Amazon HR known as the PXT OC.

              <View as="br" />
              In the spring of 2022, I returned to my alma mater and completed Vanderbilt's Full Stack Coding 
              Bootcamp. The bootcamp focused on the MERN tech stack and also taught technologies such as SQL databases, 
              GraphQL, Apollo Server, HTML5/CSS3, JQuery, and more. 
    
            </Text>
        </View>
        <View
          as="section"
          className="about-website">
            <Heading
              className="portfolio-heading"
              level={3}>
                About This Website
            </Heading>
            <Divider
              className="divider"
              orientation="horizontal" />
            <View>
              This website was built using React and is hosted through AWS. This site utilizes 
              the Amplify UI for React library.
            </View>
        </View>
      </View>
    )
}


export default Home;