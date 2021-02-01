import React from "react";
import NavBar from "../NavBar/NavBar";
import Table from "./Table";

function Admin() {
  return (
    <div>
      <NavBar sign_in_out="SIGN OUT" />
      <Table />
    </div>
  );
};

export default Admin;
