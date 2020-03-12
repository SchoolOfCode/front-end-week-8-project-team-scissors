import React, { useState } from "react";

import PublicRequestForm from "../PublicRequestForm";
import PrivateRequestForm from "../PrivateRequestForm";
import Button from "../Button";

function RequestPage() {
  const [publicLand, setPublicLand] = useState(false);
  const [privateLand, setPrivateLand] = useState(false);

  function handlePublicLand() {
    setPublicLand(true);
    setPrivateLand(false);
  }
  function handlePrivateLand() {
    setPrivateLand(true);
    setPublicLand(false);
  }

  return (
    <div>
      <section>
        <Button handleClick={handlePublicLand} text={"Public Land"} />
        <Button handleClick={handlePrivateLand} text={"Private Land"} />
      </section>
      <section style={{ display: publicLand ? "" : "none" }}>
        <PublicRequestForm />
      </section>
      <section style={{ display: privateLand ? "" : "none" }}>
        <PrivateRequestForm />
      </section>
    </div>
  );
}

export default RequestPage;
