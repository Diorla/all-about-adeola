import styled, { keyframes } from "styled-components";

interface link {
  title: string;
  description: string;
  address: string;
  tags: string[];
  delay: number;
}

const showElement = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledWeblink = styled.div<{ delay: number }>`
  margin-bottom: 8px;
  box-shadow: 0 1px 1px silver;
  padding: 8px;
  opacity: 0;
  background: white;
  margin: 4px;
  color: black;
  background-color: wheat;
  animation: ${showElement} 0.2s ease ${(props) => props.delay}s 1 forwards;
  & > a {
    color: #01579b;
  }
`;

const Tag = styled.span`
  margin: 4px;
  font-style: italic;
  text-transform: lowercase;
  &::before {
    content: "-";
  }
`;
export default (web: link) => {
  return (
    <StyledWeblink delay={web.delay}>
      <a href={web.address} target="_blank" rel="noreferrer">
        {web.title}
      </a>
      <div>{web.description}</div>
      <div>
        {web.tags.map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
      </div>
    </StyledWeblink>
  );
};
