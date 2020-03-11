import React, { useState } from "react";

import Content from "../Content";
import Portal from "../Portal";
import Title from "../Title";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";

import css from "./JoinPage.module.css";

const title = { type: "title", title: "Join Our Project" };

const content = {
  type: "content",
  title: "benefits blah",
  text: "here are the benefits of planting trees blah blah blah"
};

const portal = { type: "portal", link: "insert link here" };

function JoinPage() {
  const [register, setRegister] = useState(false);

  function handleRegister() {
    setRegister(!register);
  }

  return (
    <div>
      <section className={css.joinPage}>
        <Title grid={css.titleGrid1} {...title} />
        <Content title={content.title} grid={css.contentGrid4} />
        <Content title={content.title} grid={css.contentGrid5} />
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
