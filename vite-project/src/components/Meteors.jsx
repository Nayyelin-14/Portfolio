import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 15,
  minDelay = 0,
  maxDelay = 4000,
  minDuration = 3000,
  maxDuration = 10000,
  angle = 215,
}) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: number }).map(() => {
      return {
        left: Math.random() * window.innerWidth + "px",
        top: Math.random() * 50 + "px",
        delay: Math.random() * (maxDelay - minDelay) + minDelay,
        duration: Math.random() * (maxDuration - minDuration) + minDuration,
        angle: angle,
      };
    });
    setMeteors(newMeteors);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className="meteor"
          style={{
            top: meteor.top,
            left: meteor.left,
            "--angle": `-${meteor.angle}deg`,
            animationDelay: `${meteor.delay}ms`,
            animationDuration: `${meteor.duration}ms`,
          }}
        >
          <span className="meteor-tail" />
        </span>
      ))}
    </>
  );
};
