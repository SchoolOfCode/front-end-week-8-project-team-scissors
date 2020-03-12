import React, { useState } from "react";

import Input from "../Input";

function RegisterForm({ grid }) {
  const [species, setSpecies] = useState("");
  const [longitude, setlongitude] = useState("");
  const [latitude, latitude] = useState("");
  const [owner_id, setOwner_id] = useState("");

  async function requestTree() {
    const newUser = {
      first_name,
      last_name,
      organisation_name,
      email_address,
      phone_number,
      password
    };

    const response = await fetch("http://localhost:5000/", {
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
      <button onClick={() => requestTrees()}>Submit</button>
    </section>
  );
}

export default RegisterForm;
