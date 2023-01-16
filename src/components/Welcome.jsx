import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Kontrolna Tabla</h1>
      <h2 className="subtitle">
        Dobro Došli Nazad <strong>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;
