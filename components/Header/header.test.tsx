import React from "react";
import renderer from "react-test-renderer";
import "ts-jest";
import "jest-styled-components";
import Header from "./index";
import ContactButton from "./ContactButton";
import Logo from "./Logo";
import Link from "./Link";
import Nav from "./Nav";
import Wrapper from "./Wrapper";

describe("Testing components", () => {
  test("Contact me button", () => {
    const tree = renderer.create(<ContactButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Header", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders links appropriately", () => {
    const tree = renderer.create(<Link href="/about" title="About" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Logo", () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Nav", () => {
    const tree = renderer
      .create(
        <Nav>
          <Link href="/about" title="About" />
        </Nav>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Header wrapper", () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
