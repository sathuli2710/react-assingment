import React, { useState } from "react";
import useGetUser from "./hooks/useGetUser";

const App = () => {
  const [isLoading, setLoading] = useState(
    localStorage.getItem("user") ? false : true
  );
  const [name, email, setCounter] = useGetUser(setLoading);
  const fetchUser = () => {
    setLoading(true);
    setCounter((prevValue) => prevValue + 1);
  };
  return (
    <main className="container">
      <section className="detail-section">
        <h1 className={`${isLoading ? "loading-name" : "name"}`}>
          {isLoading ? "" : name}
        </h1>
        <p className={`${isLoading ? "loading-email" : "email"}`}>
          {isLoading ? "" : email}
        </p>
        <button className="refresh-button" onClick={fetchUser}>
          <span className={`${isLoading ? "loader" : ""}`}></span>Refresh
        </button>
      </section>
    </main>
  );
};

export default App;
