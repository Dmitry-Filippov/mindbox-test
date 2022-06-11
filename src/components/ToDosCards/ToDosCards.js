import "./ToDosCards.css"

const ToDosCards = (props) => {
  return (
    <ul className="todos-cards">
      {props.children}
    </ul>
  );
}

export default ToDosCards;