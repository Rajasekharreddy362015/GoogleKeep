import Note from "./Note";
import Typography from "@material-ui/core/Typography";
import "./styles/NoteList.css";

function NoteList({
  notes,
  deleteNote,
  togglePinned,
  updateNote,
  inNoteForm,
  changeNoteColor
}) {
  return (
    <div className="NoteList-container">
      <Typography style={{ fontWeight: "800" }} variant="h6" gutterBottom>
        PINNED
      </Typography>
      <div className="NoteList">
        {notes
          .filter((note) => note.isPinned)
          .sort((a, b) => a.timeStamp - b.timeStamp)
          .map((note) => (
            <Note
              deleteNote={deleteNote}
              key={note.id}
              id={note.id}
              title={note.title}
              inNoteForm={inNoteForm}
              text={note.text}
              color={note.noteColor}
              isPinned={note.isPinned}
              tagName={note.tagName}
              updateNote={updateNote}
              togglePinned={togglePinned}
              changeNoteColor={changeNoteColor}
            />
          ))}
      </div>
      <Typography style={{ fontWeight: "800" }} variant="h6" gutterBottom>
        OTHERS
      </Typography>
      <div className="NoteList">
        {notes
          .filter((notes) => !notes.isPinned)
          .map((note) => (
            <Note
              deleteNote={deleteNote}
              key={note.id}
              id={note.id}
              title={note.title}
              inNoteForm={inNoteForm}
              text={note.text}
              tagName={note.tagName}
              updateNote={updateNote}
              color={note.noteColor}
              togglePinned={togglePinned}
              changeNoteColor={changeNoteColor}
            />
          ))}
      </div>
    </div>
  );
}

export default NoteList;
