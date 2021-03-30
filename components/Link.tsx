import styled from "styled-components";

const Styled = styled.a`
  color: white;
`;

export default function Link({ href, title }: { href: string; title: string }) {
  return <Styled href={href}>{title}</Styled>;
}
