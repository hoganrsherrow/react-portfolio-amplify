import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Divider,
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
// import { listNotes } from "./graphql/queries";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";
import {
  CS,
  Contact,
  Home
} from "./components/index.js";
import {
  Routes,
  Route,
  Link as RL 
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon
} from "@fortawesome/fontawesome-svg-core/import.macro";


const App = () => {
 // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   const notesFromAPI = apiData.data.listNotes.items;
  //   setNotes(notesFromAPI);
  // }

  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //   };
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }

  return (
    <View className="App">
      <View as="header">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap">
          <Heading level={1}>Hogan</Heading>
          <Flex
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            wrap="nowrap">
                <View>
                  <RL>HOME</RL>
                </View>
                <Divider orientation="vertical" />
                <View>
                  <RL>CONTACT</RL>
                </View>
                <Divider orientation="vertical" />
                <View>
                  <RL>CS</RL>
                </View>
            </Flex>
        </Flex>
      </View>
      <View as="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cs" element={<CS />} />
        </Routes>
      </View>
      <View as="footer">
        <Flex justifyContent="center">
          <FontAwesomeIcon icon={brands('linkedin')} />
          <FontAwesomeIcon icon={brands('github')} />
          <FontAwesomeIcon icon={regular('envelope')} />
        </Flex>
        <View>Copyright 2022</View>
      </View>
    </View>
  );
};

export default App;