import PillButton from "../atom/PillButton";

const TypeButtons = ({ content }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "0 10px",
      }}
    >
      <PillButton content={"Account Type"} />
      <PillButton content={"Grade"} />
    </div>
  );
};

export default TypeButtons;
