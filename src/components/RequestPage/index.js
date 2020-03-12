import React, { useState } from "react";

import css from "./RequestPage.module.css";

import PublicRequestForm from "../PublicRequestForm";
import PrivateRequestForm from "../PrivateRequestForm";
import Button from "../Button";
import Title from "../Title";

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
    <div className={css.requestPage}>
      <Title grid={css.titleGrid} title={"Request Trees"} />
      <p className={css.paragraph1}>
        Please select whether you want us to plant trees on public or plant
        trees on your private land
      </p>
      <section className={css.button1}>
        <Button handleClick={handlePublicLand} text={"Public Land"} />
      </section>
      <section className={css.button2}>
        <Button handleClick={handlePrivateLand} text={"Private Land"} />
      </section>
      <section
        className={css.requestForm}
        style={{ display: publicLand ? "" : "none" }}
      >
        <PublicRequestForm />
      </section>
      <section
        className={css.requestForm}
        style={{ display: privateLand ? "" : "none" }}
      >
        <PrivateRequestForm />
      </section>
    </div>
  );
}

export default RequestPage;
