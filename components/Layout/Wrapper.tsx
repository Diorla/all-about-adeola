import React, { useState } from "react";
import styled from "styled-components";
import HeaderLink from "../Header/Link";
import Logo from "../Header/Logo";
import Layer from "../Layer";
import MenuControl from "../MenuControl";
import MenuSlide from "../MenuSlide";
import Contact from "../contact";
import Social from "../Social";
import Link from "../Link";
import FadeIn from "../FadeIn";
import Container from "./Container";
import Footer from "./Footer";
import Section from "./Section";

const Styled = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: url("./backgrounds/brain.jpg");
  background-size: cover;
  background-position: center;
`;

const Main = styled.div`
  display: flex;
  min-height: 320px;
  flex-wrap: wrap;
  & > div {
    flex: 1;
    margin-bottom: 30px;
  }
`;


export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(true);
  const [menuLoaded, setMenuLoaded] = useState(false);

  return (
    <Styled>
      <Layer>
        {menuLoaded && (
          <MenuSlide hidden={hidden}>
            <Container>
              <FadeIn>
                <Main>
                  <Section>
                    <HeaderLink href="/" title="Home" active />
                    <HeaderLink href="/about" title="About" />
                    <HeaderLink href="/showcase" title="Showcase" />
                    <HeaderLink href="/resources" title="Resources" />
                  </Section>
                  <Section>
                    <Contact />
                    <Social />
                    <Link
                      href="https://components.adeolaade.com"
                      title="Web components"
                    />
                  </Section>
                </Main>
              </FadeIn>
            </Container>
          </MenuSlide>
        )}
        <Logo />
        <MenuControl
          onClick={() => {
            setHidden(!hidden);
            if (!menuLoaded) setMenuLoaded(true);
          }}
          hidden={hidden}
        />
        <Container>{children}</Container>
        <Footer />
      </Layer>
    </Styled>
  );
}
