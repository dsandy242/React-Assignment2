import React, { Component } from 'react'
import NoteForm from './NoteForms';
import AllNotes from './AllNotes';

export default class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React Redux Notes App</h1>
        <NoteForm />
        <hr />
        <AllNotes />
      </React.Fragment>
    )
  }
}