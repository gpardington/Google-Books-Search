import React from "react";

function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron jumbotron-fluid"
    >
        <div className="container">
                <h1 className="text-center">(React) Google Books Search</h1>
                <p className="lead text-center">Search for and Save Books of Interest</p>
        </div>
    </div>
  );
}

export default Jumbotron;