import styled from "styled-components";

export default styled.textarea`
  font-size: 16px;
  border: none;
  box-shadow: inset 0 0 2px black;
  padding: 4px 8px;
  outline: none;
  resize: vertical;
  background: transparent;
  color: #ffffff;
  &:focus {
    box-shadow: inset 0 0 2px;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    font-style: italic;
    color: rgb(255 255 255 / 70%);
  }
`;
