export default function Dice({
  id,
  options,
  isSelected,
  type,
  currentValue,
  toggleSeleccion,
}) {
  return (
    <div
      onClick={() => toggleSeleccion(id)}
      style={{
        padding: "1em",
        borderRadius: "0.5em",
        width: "100px",
        height: "auto",
        aspectRatio: "1/1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "gray" : "#aaa",
        color: isSelected ? "#fff" : "#000",
        cursor: "pointer",
        border: "2px solid",
        borderColor: isSelected ? "#fff" : "gray",
        transition: "all 0.3s",
        fontSize: type == "number" ? "1.5em" : "1em",
        boxShadow: isSelected ? "inset 0 0 10px #000" : "none",
      }}
    >
      <h3>{currentValue}</h3>
    </div>
  );
}
