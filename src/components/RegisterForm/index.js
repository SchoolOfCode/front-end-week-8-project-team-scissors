import React, { useState } from "react";

import Input from "../Input";

function RegisterForm({ grid }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  function registerUser() {
    const newUser = {
      firstName,
      lastName,
      organisation,
      email,
      phone,
      password
    };

    setUser(newUser);
  }

  return (
    <section className={grid}>
      <Input value={firstName} setValue={setFirstName} label={"First Name"} />
      <Input value={lastName} setValue={setLastName} label={"Last Name"} />
      <Input
        value={organisation}
        setValue={setOrganisation}
        label={"Organisation"}
      />
      <Input value={email} setValue={setEmail} label={"Email"} />
      <Input value={phone} setValue={setPhone} label={"Telephone Number"} />
      <Input value={password} setValue={setPassword} label={"Password"} />
      <button onClick={() => registerUser()}>Submit</button>
    </section>
  );
}

export default RegisterForm;
