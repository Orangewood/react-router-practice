import React from "react";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import Main from "./Pages/Home";

export default function App() {
  const [wat, setWat] = useState<boolean>();

  useEffect(() => {
    console.log(wat);
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Route path='/' exact component={Login}></Route>
      <Route path='/home' component={Main}></Route>
    </BrowserRouter>
  );
}
