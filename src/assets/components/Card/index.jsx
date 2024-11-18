import "./index.css";
import data from "../../data/data.json";

function Card() {
  return (
    <>
      {data.length &&
        data.map(function (element) {
          return (
            <div className="container">
              <div className="user">
                <img src={element.image} alt="" />
                <p className="id">{element.id}</p>
                <h2 className="title">
                  {element.firstName} {element.lastName}
                </h2>
                <div className="num">
                  <p className="number">{element.phone}</p>
                  <p className="email">{element.email}</p>
                </div>
                <div className="addres">
                  <p className="reg">{element.address.region}</p>
                  <p className="zip">{element.address.zip}</p>
                </div>
                <div className="cars">
                  <p>{element.cars[1]}</p>
                  <p>{element.cars[2]}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Card;
