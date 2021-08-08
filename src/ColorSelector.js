import ColorButton from "./ColorButton";
import Paper from "@material-ui/core/Paper";
import colors from "./colors";
import "./styles/ColorSelector.css";
function ColorSelector({
  id,
  currentColor,
  handleClose,
  handleColorChange,
  changeNoteColor,
  inNoteForm
}) {
  return (
    <Paper className="Color-selector" style={{ height: "130px" }}>
      {colors.map((color) => (
        <ColorButton
          id={id}
          color={color}
          isCurrentColor={currentColor === color}
          handleColorChange={handleColorChange}
          inNoteForm={inNoteForm}
          handleClose={handleClose}
          changeNoteColor={changeNoteColor}
        />
      ))}
    </Paper>
  );
}

export default ColorSelector;
