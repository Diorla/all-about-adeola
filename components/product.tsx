import { useState } from "react";
import { Bounce } from "react-reveal";

interface Work {
  link: string;
  name: string;
  img: string;
  description: string;
}

export default (work: Work) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="product">
      <div>
        <a href={work.link}>{work.name}</a>
      </div>
      <Bounce left>
        <img src={work.img} onClick={() => setModal(true)} />
      </Bounce>
      <div>{work.description}</div>
      {modal ? (
        <div className="modal" onClick={() => setModal(false)}>
          <img src={work.img} />
        </div>
      ) : null}
      <style jsx>{`
        --width: max(320px, min(95vw, 640px));
        .product {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          margin: 8px auto 10vh;
        }
        img {
          width: var(--width);
          padding: 4px;
          box-shadow: 0 0 4px;
          border-bottom: 2px solid teal;
          cursor: pointer;
        }
        img:hover {
          background: #80cbc4;
          border-bottom: 2px solid #004d40;
        }
        .product div {
          padding: 4px;
        }
        .modal {
          position: fixed;
          z-index: 10000;
          top: 0;
          width: 100vw;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: rgba(0, 0, 0, 0.6);
        }
        .modal img {
          width: auto;
          padding: 0;
          max-height: 90vh;
        }
      `}</style>
    </div>
  );
};
