import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeNote } from '../reduxProject/actions/actions';
class AllNotes extends Component {
  removeNote = (index) => {
    this.props.removeNote(index);
  }
    render() {
    const notesItems = this.props.notes.map((note, index) =>
      <li key={ index }  style={{backgroundColor:"lightPink", border:'1px solid black',borderRadius:"10px"}}>
        <b>{ note.title }</b>
        <button onClick={ () => this.removeNote(index) }>x</button>
        <br />
        <span>{ note.content }</span>
      </li>
    );
    return (
      <div>
        <h3 >All Notes</h3>
               <ul>   { notesItems } </ul>
      </div>
    )
  } }

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllNotes);