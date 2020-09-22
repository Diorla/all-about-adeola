import React from "react";
import { Waypoint } from "react-waypoint";

export interface BounceProps {
  children: React.ReactNode;
}
export default function Bounce({ children }: BounceProps) {
  const id = `bounce-${Math.floor(Math.random() * Date.now())}`;
  const revealElement = () => {
    document.getElementById(id)?.classList.add("reveal");
  };

  return (
    <Waypoint onEnter={() => revealElement()}>
      <div id={id} className="bounce">
        {children}
        <style jsx>{`
          .bounce {
            transition: 2s linear;
            transform: scale(0);
            overflow: hidden;
          }
          .bounce.reveal {
            animation: 2s ease 1s 1 forwards bouncing;
          }
          @keyframes bouncing {
            0% {
              transform: scale(0);
            }
            80% {
              transform: scale(1.3);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </Waypoint>
  );
}
