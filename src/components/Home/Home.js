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
                        Self-Driving Car
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
                </View>
            </Flex>
            <Heading
              className="portfolio-heading"
              level={4}>
                CMS Projects
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
                        Java/Springboot
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
                        Python/Django
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
                        Weather App
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
                        CMS Project
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
                        Search Engine Project
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
          className="about-me">
            <Heading
              className="portfolio-heading"
              level={3}>
                About Me
            </Heading>
            <Divider
              className="divider"
              orientation="horizontal" />
            <View>
              Excepteur excepteur et velit do ipsum ea exercitation cupidatat cupidatat ea. Dolore irure qui irure aute. Dolor sit eiusmod laboris mollit officia deserunt duis. Id nisi cillum duis eiusmod officia ullamco culpa quis. Magna dolore labore tempor tempor laborum eiusmod commodo veniam nisi.

              Aliqua tempor velit minim qui velit anim culpa amet deserunt nulla ea sint. Exercitation et voluptate non commodo officia aliquip laboris in. Tempor occaecat id cillum eiusmod veniam reprehenderit irure elit cupidatat sunt culpa excepteur adipisicing elit. Voluptate adipisicing magna ad nostrud minim. Mollit do sint proident nisi amet do aliqua irure culpa in officia. Do duis labore sint et exercitation ea esse tempor pariatur Lorem.

              Aliqua irure consequat ipsum sint incididunt elit amet reprehenderit aliquip proident fugiat. Fugiat velit in officia aute anim non consequat sit deserunt cupidatat velit magna. Minim officia cupidatat eiusmod qui enim et mollit eu. Minim ea officia magna exercitation esse cillum reprehenderit veniam eu officia. Ipsum et ut anim nisi incididunt laborum amet. Cupidatat eiusmod laborum do veniam proident ullamco ut enim cillum officia exercitation ullamco adipisicing nostrud. Adipisicing ut ea proident irure eiusmod amet nostrud.
            </View>
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
              Officia laborum ea esse excepteur id occaecat tempor culpa cupidatat labore cillum consectetur. Sint est proident adipisicing do id. Anim aliquip irure proident eu consequat dolore officia. Aliqua aliquip pariatur in et id. Anim enim reprehenderit consequat fugiat voluptate est duis et consectetur ea dolore incididunt. Ipsum laborum sint aliquip dolor sit ut reprehenderit. Nisi magna aliquip officia cillum.
            </View>
        </View>
      </View>
    )
}


export default Home;