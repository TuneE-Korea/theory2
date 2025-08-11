import { Check } from "lucide-react";
const AirconDetail = ({ color, desc }) => {
  const style = {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    gap: "30px",
  };
  return (
    <div style={style}>
      <Check color={color} />
      {desc}
    </div>
  );
};
export default AirconDetail;
