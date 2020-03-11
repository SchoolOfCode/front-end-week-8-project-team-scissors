import React, { useState } from "react";

import Input from "../Input";

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
      <button onClick={() => handleLogin()}>Login</button>
    </section>
  );
}

export default LoginForm;
