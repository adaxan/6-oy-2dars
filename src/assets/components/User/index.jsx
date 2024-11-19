import React from "react";

function Index({ userData }) {
  return (
    <div className="user">
      <img src={userData.image} alt={`${userData.firstName} ${userData.lastName}`} />
      <p className="id">{userData.id}</p>
      <h2 className="firstName">{userData.firstName}</h2>
      <h2 className="lastName">{userData.lastName}</h2>
      <div className="num">
        <p className="number">{userData.phone}</p>
        <p className="email">{userData.email}</p>
      </div>
      <div className="address">
        <p className="reg">{userData.address.region}</p>
        <p className="zip">{userData.zip}</p>
      </div>
      <div className="cars">
        <p>{userData.cars[0]}</p>
        <p>{userData.cars[1]}</p>
      </div>
    </div>
  );
}

export default Index;