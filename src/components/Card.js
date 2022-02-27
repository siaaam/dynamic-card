import '../app.css';
function Card({ id, heading, text }) {
  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
