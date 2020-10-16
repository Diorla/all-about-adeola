export default () => (
  <div id="contact">
    <div>
      <img src="email.svg" alt="mail me" />
    </div>
    <div>
      <div className="message">
        If you have a question, interested in my service or just want to say hi,{" "}
        <a href="mailto:adedotster@gmail.com">Send me an email</a> and I'll try
        my best to get back to you!
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
