import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import useInputState from "./hooks/useInputState";
import PaletteIcon from "@material-ui/icons/Palette";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import Popover from "@material-ui/core/Popover";
import ColorSelector from "./ColorSelector";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles/Note.css";
function Note({
  id,
  title,
  text,
  color,
  isPinned,
  togglePinned,
  tagName,
  updateNote,
  deleteNote,
  inNoteForm,
  changeNoteColor
}) {
  const [noteTitle, setTitle] = useInputState(title);
  const [noteText, setText] = useInputState(text);
  const [isEditing, toggleIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEditing = () => {
    toggleIsEditing(!isEditing);
  };
  const handleSubmit = () => {
    handleEditing();
    updateNote(id, noteTitle, noteText);
  };
  const open = Boolean(anchorEl);
  const popperId = open ? "simple-popover" : undefined;
  const styles = { backgroundColor: `${color}` };
  if (isEditing) {
    return (
      <Paper className="Note" style={styles}>
        <input
          className="EditingForm-Input"
          onChange={setTitle}
          value={noteTitle}
        />
        <textarea
          rows={2}
          className="EditingForm-Input EditingForm-Input-textarea"
          value={noteText}
          onChange={setText}
        />
        <div className="done-icon-container">
          <IconButton onClick={handleSubmit}>
            <DoneIcon />
          </IconButton>
        </div>
      </Paper>
    );
  } else {
    return (
      <>
        <Paper
          onClick={handleEditing}
          style={styles}
          className="Note"
          variant="outlined"
          elevation={3}
        >
          <div className="badge">{tagName.toUpperCase()}</div>
          <IconButton className="pin-button" onClick={() => togglePinned(id)}>
            {isPinned ? <TurnedInIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <Typography variant="h6">{noteTitle}</Typography>
          <Typography variant="body1">{noteText}</Typography>
          <div className="footer-options">
            <IconButton>
              <PaletteIcon onClick={handleClick} />
            </IconButton>
            <IconButton>
              <DeleteIcon onClick={() => deleteNote(id)} />
            </IconButton>
          </div>
        </Paper>
        {/* POPPER */}
        <Popover
          id={popperId}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <ColorSelector
            id={id}
            inNoteForm={inNoteForm}
            currentColor={color}
            changeNoteColor={changeNoteColor}
            handleClose={handleClose}
          />
        </Popover>
      </>
    );
  }
}

export default Note;
