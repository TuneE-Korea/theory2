import Caption from "../atom/Caption";

const Request = ({ time, requester }) => {
  return (
    <section style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Caption color={"gray"} content={"Requested at:"} />
      <Caption color={"black"} content={time} />
      <Caption color={"gray"} content={"by"} />
      <Caption color={"black"} content={requester} />
    </section>
  );
};

export default Request;
