import Card, { Reference } from "./card";

interface References {
  data: Reference[];
}

export default ({ data }: References) => (
  <div className="slide-container">
    <div className="slides">
      {data.map((item: Reference, idx: number) => (
        <div key={idx} id={`slide-${idx}`}>
          <Card {...item} />
        </div>
      ))}
    </div>
    <div className="navigator">
      {data.map((item: any, idx: number) => (
        <a key={idx} href={`#slide-${idx}`} id={`btn-${idx}`}></a>
      ))}
    </div>
    <style jsx>{`
      /*Main*/
      .slide-container {
        width: 90%;
        text-align: center;
        overflow: hidden;
      }

      .slides {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }

      .slides > div {
        width: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        background: rgba(255, 255, 255, 0.8);
        position: relative;
        transform: scale(1);
        transform-origin: center center;
        scroll-snap-align: start;
        flex-shrink: 0;
        margin-right: 5px;
      }

      /*Navigating element ie. <a/>*/
      .navigator {
        display: flex;
        justify-content: space-evenly;
      }
      .navigator > a {
        height: 0.5rem;
        width: 0.5rem;
        background: white;
        border-radius: 51%;
        box-shadow: 0 0 8px black;
        margin: 0.5rem;
      }

      .navigator > a:active {
        background: teal;
      }

      /*Scrollbar */
      .slides::-webkit-scrollbar {
        width: 1px;
        height: 5px;
        margin: 0 4px;
      }
      .slides::-webkit-scrollbar-thumb {
        background: teal;
        border-radius: 5px;
      }
      .slides::-webkit-scrollbar-track {
        background: transparent;
      }
    `}</style>
  </div>
);
