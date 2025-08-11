import PartnerInfo from "../molecules/PartnerInfo";
import TypeButtons from "../molecules/TypeButtons";
import Request from "../molecules/Request";

const Partner = ({ number, src, name, requester, time }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ecf0f1",
        width: "fit-content",
        border: "1px solid #ecf0f1",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <PartnerInfo number={number} src={src} name={name} />
      <TypeButtons />
      <Request requester={requester} time={time} />
    </div>
  );
};

export default Partner;
