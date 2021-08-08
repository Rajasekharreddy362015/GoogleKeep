import Paper from "@material-ui/core/Paper";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import IconButton from "@material-ui/core/IconButton";
import useInputState from "./hooks/useInputState";
import { useState } from "react";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ColorSelector from "./ColorSelector";
import Popover from "@material-ui/core/Popover";
import PaletteIcon from "@material-ui/icons/Palette";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import CancelIcon from "@material-ui/icons/Cancel";
import "./styles/NoteForm.css";
function NoteForm({ addNote, inNoteForm }) {
  const [title, setTitle, resetTitle] = useInputState("");
  const [text, setText, resetText] = useInputState("");
  const [isPinned, toggleIsPinned] = useState(false);
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, toggleIsOpen] = useState(false);
  const [tagName, setTagname] = useState("all");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, text, noteColor, isPinned, tagName);
    resetTitle();
    resetText();
    toggleIsPinned(false);
    toggleIsOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleColorChange = (color) => {
    setNoteColor(color);
    console.log(noteColor);
    handleClose();
  };
  const togglePinned = () => {
    toggleIsPinned(!isPinned);
  };
  const openForm = () => {
    toggleIsOpen(true);
  };
  const closeForm = (e) => {
    e.stopPropagation();
    toggleIsOpen(false);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const styles = { display: isOpen ? "flex" : "none" };
  return (
    <Paper
      style={{
        backgroundColor: `${noteColor}`,
        height: isOpen ? "250px" : "3rem"
      }}
      className="NoteForm"
      onClick={openForm}
      elevation={2}
    >
      <CancelIcon
        onClick={closeForm}
        className="cancel-button"
        style={{ display: isOpen ? "" : "none" }}
      />

      <form onSubmit={handleSubmit}>
        <div className="form-header" style={styles}>
          <input
            className="Form-input"
            placeholder="Title"
            type="text"
            value={title}
            onChange={setTitle}
            required
          />
          <IconButton onClick={togglePinned}>
            {isPinned ? <TurnedInIcon /> : <TurnedInNotIcon />}
          </IconButton>
        </div>
        <textarea
          placeholder="Take a note..."
          value={text}
          onChange={setText}
          rows={3}
          className="Form-input Form-input-text"
          required
        ></textarea>
        <div style={styles} className="options">
          <div className="tags">
            <input type="radio" value="work" id="work" name="tag" />
            <label
              className="tag-label"
              htmlFor="work"
              onClick={() => setTagname("work")}
            >
              <LocalOfferIcon className="icon" />
              WORK
            </label>
            <input type="radio" value="svhool" id="school" name="tag" />
            <label
              className="tag-label"
              htmlFor="school"
              onClick={() => setTagname("school")}
            >
              <LocalOfferIcon className="icon" />
              SCHOOL
            </label>
            <input type="radio" value="neog" id="neog" name="tag" />
            <label
              className="tag-label"
              htmlFor="neog"
              onClick={() => setTagname("neog")}
            >
              <LocalOfferIcon className="icon" />
              NEOG
            </label>
          </div>
          <div className="icons">
            <IconButton type="submit">
              <AddRoundedIcon />
            </IconButton>
            <IconButton>
              <PaletteIcon onClick={handleClick} />
            </IconButton>
          </div>
        </div>
      </form>
      {/* POPPER */}
      <Popover
        id={id}
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
          currentColor={noteColor}
          handleColorChange={handleColorChange}
          inNoteForm={inNoteForm}
        />
      </Popover>
    </Paper>
  );
}

export default NoteForm;
