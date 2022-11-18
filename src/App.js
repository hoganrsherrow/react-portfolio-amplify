import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { API } from "aws-amplify";
import {
  Button,
  Divider,
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
import profilepicture from "./images/profile-picture.png";


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
        <Heading
          className="name"
          level={1}>
            Hogan Sherrow
        </Heading>
        <Heading
          className="title"
          level={4}>
            Developer for Hire.
        </Heading>
            {/* <Flex
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
              </Flex> */}
      </View>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cs" element={<CS />} />
      </Routes>
      <View as="footer">
        <Flex justifyContent="center" className="icons">
          <Link href="https://www.linkedin.com/in/hogan-sherrow-13421321a/">
            <FontAwesomeIcon className="icon" icon={brands('linkedin')} />
          </Link>
          <Link href="https://www.github.com/hoganrsherrow">
            <FontAwesomeIcon className="icon" icon={brands('github')} />
          </Link>
          <Link href="mailto:hogan.r.sherrow@vanderbilt.edu">
            <FontAwesomeIcon className="icon" icon={regular('envelope')} />
          </Link>
        </Flex>
        <View>&copy; 2022</View>
      </View>
    </View>
  );
};

export default App;