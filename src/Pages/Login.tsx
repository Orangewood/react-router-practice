import React, { SyntheticEvent } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Button, Col, Input, Row, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";

interface LoginProps {
  url: string;
}

export default function Home(props: LoginProps) {
  const { url } = props;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const login = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("url here", {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        username,
        password,
      }),
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/home' />;
  }

  return (
    <Space direction='vertical'>
      <Input onChange={(e) => setUsername(e.target.value)}></Input>
      <Input onChange={(e) => setPassword(e.target.value)}></Input>
      <Button onClick={login}></Button>
    </Space>
  );
}
