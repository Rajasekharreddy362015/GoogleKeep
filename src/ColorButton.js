import "./styles/ColorButton.css";
function ColorButton({
  id,
  color,
  inNoteForm,
  handleColorChange,
  handleClose,
  changeNoteColor,
  isCurrentColor
}) {
  const styles = {
    backgroundColor: `${color}`,
    border: isCurrentColor ? "2px solid black" : null
  };
  const handleClick = (e) => {
    if (inNoteForm) {
      handleColorChange(color);
    }
    if (!inNoteForm) {
      changeNoteColor(id, color);
      handleClose();
    }
  };
  return (
    <div
      onClick={handleClick}
      value={color}
      className="ColorButton"
      style={styles}
    ></div>
  );
}

export default ColorButton;
