const Caption = ({ color, content }) => {
  return (
    <span
      style={{
        color,
        fontSize: "12px",
      }}
    >
      {content}
    </span>
  );
};

export default Caption;
