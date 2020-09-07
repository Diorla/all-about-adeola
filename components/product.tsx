// import { useState } from "react";
// import { Bounce } from "react-reveal";

export default() => <div>Must not use react-reveal</div>
// interface Work {
//   link: string;
//   name: string;
//   img: string;
//   description: string;
// }

// /**
//  * Prevents rendering on window.load
//  */
// const ControlRender = ({
//   children,
//   render,
// }: {
//   children: React.ReactNode;
//   render: boolean;
// }) => (render ? <>{children}</> : null);
// export default (work: Work) => {
//   const [modal, setModal] = useState(false);
//   const [init, setInit] = useState(false);
//   return (
//     <div className="product">
//       <div>
//         <a href={work.link}>{work.name}</a>
//       </div>
//       <Bounce left>
//         <div
//           className="img"
//           onClick={() => {
//             setModal(true);
//             setInit(true);
//           }}
//           title="Click to zoom in"
//         ></div>
//       </Bounce>
//       <div>{work.description}</div>
//       <ControlRender render={init}>
//         {modal ? (
//           <div
//             className="modal"
//             onClick={() => {
//               setModal(false);
//               setInit(true);
//             }}
//           >
//             <img src={work.img} />
//           </div>
//         ) : (
//           <div className="hide" onClick={() => setModal(false)}>
//             <img src={work.img} />
//           </div>
//         )}
//       </ControlRender>
//       <style jsx>{`
//         --width: max(320px, min(95vw, 640px));
//         --height: calc(var(--width) * 9 / 16);
//         .product {
//           display: flex;
//           flex-direction: column;
//           justify-content: space-around;
//           align-items: center;
//           margin: 8px auto 10vh;
//         }
//         .img {
//           width: var(--width);
//           height: var(--height);
//           padding: 4px;
//           box-shadow: 0 0 4px;
//           border-bottom: 2px solid teal;
//           cursor: pointer;
//           background-image: url(${work.img});
//           background-size: contain;
//           background-position: center;
//           background-repeat: no-repeat;
//         }
//         .img:hover {
//           background-color: #80cbc4;
//           border-bottom: 2px solid #004d40;
//         }
//         .product div {
//           padding: 4px;
//         }
//         .modal {
//           position: fixed;
//           z-index: 10000;
//           top: 0;
//           width: 100vw;
//           height: 100%;
//           display: flex;
//           justify-content: space-around;
//           align-items: center;
//           background: rgba(0, 0, 0, 0.6);
//           transform: scale(1);
//           animation: 0.5s ease 0s 1 forwards modalAnimation;
//         }
//         .modal img {
//           width: auto;
//           padding: 0;
//           max-height: 90vh;
//           transform: scale(0);
//           animation: 1s ease 0s 1 forwards modalAnimation;
//         }
//         .hide {
//           position: fixed;
//           z-index: 10000;
//           top: 0;
//           width: 100vw;
//           height: 100%;
//           display: flex;
//           justify-content: space-around;
//           align-items: center;
//           background: rgba(0, 0, 0, 0.6);
//           transform: scale(1);
//           animation: 0.7s ease 0s 1 forwards hideAnimation;
//         }
//         .hide img {
//           width: auto;
//           padding: 0;
//           max-height: 90vh;
//           transform: scale(1);
//           animation: 0.5s ease 0s 1 forwards hideAnimation;
//         }
//         @keyframes modalAnimation {
//           0% {
//             transform: scale(0);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }
//         @keyframes hideAnimation {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };
