import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

function submitForm(
  ev: { preventDefault: () => void; target: any },
  setState: (status: string) => void
) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      setState("SUCCESS");
    } else {
      setState("ERROR");
    }
  };
  xhr.send(data);
}

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding: 8px;
`;

const StyledLeft = styled(StyledRight)`
  background-image: url(email.svg);
  background-position: center;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: hue;
  background-repeat: no-repeat;
`;
const StyledMessage = styled.div`
  text-shadow: 0 0 12px white;
  text-align: center;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledButton = styled.button`
  border: none;
  background: teal;
  color: white;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  &:hover {
    background-color: #009688;
  }
`;
const StyledError = styled.div`
  color: red;
`;
export default () => {
  const [status, setStatus] = useState("");
  return (
    <div id="contact">
      <StyledLeft>
        <StyledMessage>
          If you have a question, interested in my service or just want to say
          hi, send me an email.
        </StyledMessage>
      </StyledLeft>
      <StyledRight>
        <StyledForm
          onSubmit={(e) => submitForm(e, setStatus)}
          action="https://formspree.io/f/mqkglvzz"
          method="POST"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Input
            label="Name"
            type="text"
            name="username"
            required
            placeholder="John Doe"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
          <Input
            label="Message"
            type="text"
            name="message"
            placeholder="..."
            multiline
            required
          />
          <br />
          {status === "SUCCESS" ? (
            <div>Thanks!</div>
          ) : (
            <StyledButton>Submit</StyledButton>
          )}
          {status === "ERROR" && (
            <StyledError>Oops! There was an error.</StyledError>
          )}
        </StyledForm>
      </StyledRight>
      <style jsx>{`
        #contact {
          background: linear-gradient(180deg, white 40%, transparent);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: row;
          align-items: stretch;
        }
      `}</style>
    </div>
  );
};
