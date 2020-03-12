import React, { useState } from "react";

import Content from "../Content";
import Portal from "../Portal";
import Title from "../Title";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import Header from "../Header";

import css from "./JoinPage.module.css";

const title = { type: "title", title: "Join Our Project" };

const portal = { type: "portal", link: "insert link here" };

function JoinPage() {
  const [register, setRegister] = useState(false);

  function handleRegister() {
    setRegister(!register);
  }

  return (
    <div>
      <section className={css.joinPage}>
        <Header grid={css.header} />
        <Title grid={css.titleGrid1} {...title} />
        <Content title={"How it works:"} grid={css.contentGrid4} />
        <Content
          title={
            "1. Register or Login 2. Request Trees 3. Plant Trees 4. Check your tree on the virtual forest"
          }
          grid={css.contentGrid5}
        />
        <Portal
          handleClick={handleRegister}
          grid={css.portalGrid3}
          {...portal}
        />
        <Portal grid={css.portalGrid4} {...portal} />
      </section>
      <section
        className={css.registerPage}
        style={{ display: register ? "" : "none" }}
      >
        <RegisterForm grid={css.registerSection} />
        <LoginForm grid={css.loginSection} />
      </section>
    </div>
  );
}

export default JoinPage;
