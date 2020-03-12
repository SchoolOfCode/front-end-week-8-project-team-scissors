import React, { useState } from "react";

import css from "./PublicRequestForm.module.css";

import Input from "../Input";
import Button from "../Button";

/* We want to plant as many trees as possible on public land. However, it may not be possible for your local authority
 to approve every request. After requesting for trees to be planted in your area, please be patient until we can get in
touch. This should be no longer than a few weeks.*/

function PublicRequestForm({ grid }) {
  const [buildingNumber, setBuildingNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [town, setTown] = useState("");
  const [postcode, setPostcode] = useState("");
  const [numberOfTrees, setNumberOfTrees] = useState("");
  const [desiredSpecies, setDesiredSpecies] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  const [newTree, setNewTree] = useState({});

  function requestTrees() {
    const updateTree = {
      buildingNumber,
      streetName,
      town,
      postcode,
      numberOfTrees,
      desiredSpecies,
      additionalInformation
    };

    setNewTree(updateTree);
  }

  return (
    <section className={css.formSection}>
      <p>
        We want to plant as many trees as possible in the West Midlands.
        <br />
        However, it may not be possible for your local authority to approve
        every request on public land.
        <br />
        After requesting for trees to be planted in your area, please be patient
        until we can get in touch. This should be no longer than a few weeks.
        <br />
      </p>
      <form>
        <Input
          value={buildingNumber}
          setValue={setBuildingNumber}
          label={"Building Number"}
        />
        <Input
          value={streetName}
          setValue={setStreetName}
          label={"Street Name"}
        />
        <Input value={town} setValue={setTown} label={"Town"} />
        <Input value={postcode} setValue={setPostcode} label={"Postcode"} />
        <Input
          value={numberOfTrees}
          setValue={setNumberOfTrees}
          label={"Number of Trees"}
        />
        <Input
          value={desiredSpecies}
          setValue={setDesiredSpecies}
          label={"Desired Species"}
        />
        <Input
          value={additionalInformation}
          setValue={setAdditionalInformation}
          label={"Additional Information"}
        />
      </form>
      <div className={css.buttonContainer}>
        <Button handleClick={requestTrees} text={"Submit"} />
      </div>
    </section>
  );
}

export default PublicRequestForm;
