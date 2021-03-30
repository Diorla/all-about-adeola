import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid white;
  padding-top: 6px;
  z-index: 1000;
  color: white;
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>Ade Adeola &copy; {new Date().getFullYear()}</div>
      <div>
        Made with <span style={{ color: "crimson" }}>❤</span> and React, Hosted
        on Vercel
      </div>
    </Wrapper>
  );
}
