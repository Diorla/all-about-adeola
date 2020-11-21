import { useState } from "react";

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
export default () => {
  const [status, setStatus] = useState("");
  return (
    <div id="contact">
      <div style={{ backgroundImage: "url(email.svg)" }}>
        {/* <img src="email.svg" alt="mail me" /> */}
        <form
          onSubmit={(e) => submitForm(e, setStatus)}
          action="https://formspree.io/f/mqkglvzz"
          method="POST"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Username:</label>
          <input type="text" name="username" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <input type="text" name="message" />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
      <div>
        <div className="message">
          If you have a question, interested in my service or just want to say
          hi, <a href="mailto:adedotster@gmail.com">Send me an email</a> and
          I'll try my best to get back to you!
        </div>
      </div>
      <style jsx>{`
        #contact {
          background: linear-gradient(180deg, white 40%, transparent);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          flex: 1;
          padding: 8px;
          flex-wrap: wrap;
          flex-direction: row;
        }

        #contact > div {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 240px;
        }
        #contact > div:last-child {
          min-width: 240px;
          justify-content: center;
          align-items: flex-start;
        }
        #contact img {
          height: 100%;
        }
      `}</style>
    </div>
  );
};
