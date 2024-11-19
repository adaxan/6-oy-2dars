import "./index.css";
import data from "../../data/data.json";
import User from "../User/index";

function Card() {
  return (
    <>
      {data.length &&
        data.map((element) => (
          <div className="container" key={element.id}>
            <User userData={element} />
          </div>
        ))}
    </>
  );
}

export default Card;