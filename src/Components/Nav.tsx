import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link to={"/home"}>Home</Link>
      <Link to={"/"}>Login</Link>
    </>
  );
}
