import Link from "./Link";
import Logo from "./Logo";
import Highlight from "./Highlight";
import Nav from "./Nav";
import Header from "./Header";

export default () => (
  <Header id="top">
    <Logo href="/" title="Adeola Ade" />
    <Nav>
      <Link href="/about" title="About" />
      <Link href="/showcase" title="Showcase" />
      <Link href="/resources" title="Resources" />
      <Highlight href="#contact" title="Contact" />
    </Nav>
  </Header>
);
