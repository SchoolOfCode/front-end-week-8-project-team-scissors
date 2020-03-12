import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";

function LoginForm({ grid }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  function handleLogin() {
    const newLogin = { email, password };
    setLogin(newLogin);
  }

  return (
    <section className={grid}>
      <Input value={email} setValue={setEmail} label={"Email"} />
      <Input value={password} setValue={setPassword} label={"Password"} />
      <Button text={"Login"} />
    </section>
  );
}

export default LoginForm;
