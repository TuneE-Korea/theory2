const PillButton = ({ content }) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "1px solid #1ad4c5",
        borderRadius: "20px",
        padding: "7px 20px",
        color: "1ad4c5",
      }}
    >
      {content}
    </button>
  );
};

export default PillButton;
