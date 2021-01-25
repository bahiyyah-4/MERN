import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <PersonCard
        fname={"Jane"}
        lname={"Doe"}
        age={45}
        hair={"black"}
      ></PersonCard>
      <PersonCard
        fname={"john"}
        lname={"Smith"}
        age={88}
        hair={"Brown"}
      ></PersonCard>
      <PersonCard
        fname={"millard"}
        lname={"Fillmore"}
        age={50}
        hair={"Brown"}
      ></PersonCard>
      <PersonCard
        fname={"maria"}
        lname={"Smith"}
        age={62}
        hair={"Brown"}
      ></PersonCard>
    </>
  );
}

export default App;
