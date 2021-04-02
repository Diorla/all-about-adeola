import styled from "styled-components";
import FadeIn from "../FadeIn";
import Contact from "../contact";
import Social from "../Social";
import Link from "../Link";
import HeaderLink from "../Header/Link";

const Main = styled.div`
  display: flex;
  min-height: 320px;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 90px;
  & > div {
    flex: 1;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Container({ active }: { active: string }) {
  return (
    <FadeIn>
      <Main>
        <Section>
          <HeaderLink href="/" title="Home" active={active === "home"} />
          <HeaderLink href="/about" title="About" active={active === "about"} />
          <HeaderLink
            href="/showcase"
            title="Showcase"
            active={active === "showcase"}
          />
          <HeaderLink
            href="/resources"
            title="Resources"
            active={active === "resources"}
          />
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
  );
}
