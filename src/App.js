import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import NavigationBar from "./NavigationBar";
import "./styles/App.css";
const demoNotes = [
  {
    id: 1,
    title: "Reading",
    text: "Read A Book",
    noteColor: "#E6C9A8",
    isPinned: true,
    tagName: "work"
  },
  {
    id: 2,
    title: "Coding",
    text: "Code Google Keep",
    noteColor: "#A7FFEB",
    isPinned: false,
    tagName: "school"
  },
  {
    id: 3,
    title: "Writing",
    text: "Write a Blog",
    noteColor: "#E6C9A8",
    isPinned: false,
    tagName: "work"
  },
  {
    id: 4,
    title: "Reading",
    text: "Read A Book",
    noteColor: "#E6C9A8",
    isPinned: true,
    tagName: "work"
  },
  {
    id: 5,
    title: "Coding",
    text: "Code Google Keep",
    noteColor: "#A7FFEB",
    isPinned: false,
    tagName: "school"
  },
  {
    id: 6,
    title: "Writing",
    text: "Write a Blog",
    noteColor: "#E6C9A8",
    isPinned: false,
    tagName: "work"
  }
];
function App() {
  //Managing notes in state
  const [notes, setNotes] = useState(demoNotes);
  //Managing Filtered Notes
  // const [filteredNotes, setFilteredNotes] = useState(notes);
  //Method to add Note
  const addNote = (title, text, noteColor, isPinned, tagName) => {
    const newNote = {
      id: uuidv4(),
      title: title,
      text: text,
      noteColor: noteColor,
      isPinned: isPinned,
      tagName: tagName,
      timeStamp: Date.now()
    };
    setNotes([...notes, newNote]);
  };
  //Method to change note color
  const changeNoteColor = (id, noteColor) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, noteColor: noteColor } : note
    );
    setNotes(updatedNotes);
  };
  //Method to delete Note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  //Method to toggle pinned
  const togglePinned = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, isPinned: !note.isPinned, timeStamp: Date.now() }
        : note
    );
    setNotes(updatedNotes);
  };
  //Method to update note
  const updateNote = (id, title, text) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: title, text: text } : note
    );
    setNotes(updatedNotes);
  };
  //Method to filter note
  // const filterNotes = (tagName) => {
  //   const updatedNotes = notes.filter((note) => note.tag === tagName);
  //   setFilteredNotes(updatedNotes);
  // };

  return (
    <div className="App">
      <NavigationBar />
      <NoteForm addNote={addNote} inNoteForm={true} />
      <NoteList
        notes={notes}
        changeNoteColor={changeNoteColor}
        deleteNote={deleteNote}
        updateNote={updateNote}
        inNoteForm={false}
        togglePinned={togglePinned}
      />
    </div>
  );
}

export default App;
