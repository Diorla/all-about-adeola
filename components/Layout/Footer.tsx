import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  border-top: 1px solid white;
  color: white;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 1000;
  background-color: teal;
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>Ade Adeola &copy; {new Date().getFullYear()}</div>
      <div>
        Made with <span style={{ color: "#ef9a9a" }}>❤</span> and React, Hosted
        on Vercel
      </div>
    </Wrapper>
  );
}
