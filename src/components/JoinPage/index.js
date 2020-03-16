import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Content from "../Content";
import Portal from "../Portal";
import Title from "../Title";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import Header from "../Header";

import css from "./JoinPage.module.css";

const title = { type: "title", title: "Join Our Project" };

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
        <Content text={"How it works:"} grid={css.contentGrid4} />
        <Content
          text={
            <ol>
              <li>Register or Login</li>
              <li>Request Trees</li>
              <li>Plant Trees</li>
              <li>Check your tree on the virtual forest</li>
            </ol>
          }
          grid={css.contentGrid5}
        />
        <Portal
          buttonStyle={css.portalStyle}
          className={css.portalGrid3}
          onClick={() => handleRegister()}
          text={"Register"}
        />
        <Portal
          buttonStyle={css.portalStyle}
          className={css.portalGrid4}
          text={"Sign in here"}
        />
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
