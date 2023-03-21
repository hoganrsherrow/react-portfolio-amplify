import React from "react";
import "@aws-amplify/ui-react/styles.css";
import "../../App.css";
import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
  View,
  Divider,
} from "@aws-amplify/ui-react";
import spaceapppng from "../../images/spaceapp.png";
import decisionassistantpng from "../../images/decision-assistant.png";
import readme from "../../images/readme-generator.png";
import teamprofile from "../../images/team-profile-generator.png";
import employeetracker from "../../images/employee-tracker.png";
import selfDrivingCar from "../../images/self-driving-car.png";
import dailyPlanner from "../../images/daily-planner.png";
import openWeather from "../../images/open-weather.png";
import deepThoughts from "../../images/deep-thoughts.png";
import photoPort from "../../images/photo-port.png";


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
                MERN Stack
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
                        Deep Thoughts
                    </Heading>
                    <Link
                      href="https://hogan-deep-thoughts.herokuapp.com/">
                        <Image
                          alt="spaceapp screenshot"
                          className="portfolio-img"
                          src={deepThoughts} />
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
                        Photographer Portfolio
                    </Heading>
                    <Link
                      href="https://hoganrsherrow.github.io/photo-port/">
                        <Image
                          alt="Phtographer Portfolio screenshot"
                          className="portfolio-img"
                          src={photoPort} />
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
              fullstack web development position. My most recent role was a fullstack developer for Hankook Tire America
              Corporation where I spent most of my time working on B2B and internal portals that utilized JQuery/AJAX, HTML5, CSS3, and Redux
              technologies for the frontend and Java, Spring framework, Oracle SQL DB, and Apache Tomcat for the backend.
              All services were hosted through AWS EC2.

              <View as="br" />
              <View as="br" />
              I am a graduate of Vanderbilt University in Nashville, TN, with a major in economics and a minor in chemistry. After graduation, I worked full-time for Amazon.com, Inc. as an HR Lead within their
              PXT OC organization. In the spring of 2022, I returned to my alma mater and completed Vanderbilt's Full Stack Coding 
              Bootcamp. The bootcamp focused on the MERN tech stack and also taught technologies such as SQL databases, 
              GraphQL, Apollo Server, HTML5/CSS3, JQuery, and more.

              <View as="br" />
              <View as="br" />
              If you have any questions or would like to collaborate on a coding project, please feel free to reach out on LinkedIn or through email!
              Both links can be found below. 
    
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