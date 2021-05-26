import "./Card.css";

function Card(props) {
  // to apply any directly passed className(expense-item or expenses )
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
