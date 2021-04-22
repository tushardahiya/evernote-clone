import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  };

  render() {
    return <div>hello world</div>;
  }
}

export default App;
