import React, { useState } from "react";

import Input from "../Input";

function RegisterForm({ grid }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [organisation_name, setOrganisation] = useState("");
  const [email_address, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // const [user, setUser] = useState({});

  async function registerUser() {
    const newUser = {
      first_name,
      last_name,
      organisation_name,
      email_address,
      phone_number,
      password
    };
    console.log(newUser);

    // setUser(newUser);

    const response = await fetch("http://192.168.0.104:5000", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(newUser) // body data type must match "Content-Type" header
    });
    console.log(newUser);
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <section className={grid}>
      <Input value={first_name} setValue={setFirstName} label={"First Name"} />
      <Input value={last_name} setValue={setLastName} label={"Last Name"} />
      <Input
        value={organisation_name}
        setValue={setOrganisation}
        label={"Organisation"}
      />
      <Input value={email_address} setValue={setEmail} label={"Email"} />
      <Input
        value={phone_number}
        setValue={setPhone}
        label={"Telephone Number"}
      />
      <Input value={password} setValue={setPassword} label={"Password"} />
      <button onClick={() => registerUser()}>Submit</button>
    </section>
  );
}

export default RegisterForm;
