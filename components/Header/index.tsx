import React from "react";
import Link from "./Link";
import Logo from "./Logo";
import ContactButton from "./ContactButton";
import Nav from "./Nav";
import Wrapper from "./Wrapper";

export default () => (
  <Wrapper id="top">
    <Logo />
    <Nav>
      <Link href="/about" title="About" />
      <Link href="/showcase" title="Showcase" />
      <Link href="/resources" title="Resources" />
      <ContactButton />
    </Nav>
  </Wrapper>
);
