import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";

function PrivateRequestForm({ grid }) {
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
    console.log(newTree);
  }

  return (
    <section className={grid}>
      <p>
        We want to plant as many trees as possible in the West Midlands. If you
        own the land that you are requesting trees for, we will be happy to
        provide you with as many trees as possible. However if you do not own
        the land, then make sure you have the land owner's permission before
        placing a request.
      </p>
      <p>
        After requesting for trees to be planted in your area, please be patient
        until we can get in touch. This should be no longer than a few weeks.
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
      <Button handleClick={requestTrees} text={"Submit"} />
    </section>
  );
}

export default PrivateRequestForm;
