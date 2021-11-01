import Button from "./Button";
function Header(props) {
  // const onClick = (e) => {
  //   console.log("Click");
  // };
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <Button
        color={"red"}
        text={props.showAdd ? "Close" : "Add"}
        //className="btn"
        onClick={props.onAdd}
      />
    </div>
  );
}
Header.defaultProps = { title: "default" };

export default Header;
