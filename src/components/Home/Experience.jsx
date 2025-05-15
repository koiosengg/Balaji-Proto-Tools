import React, { useEffect, useRef, useState } from "react";
import DesktopBackground from "../../assets/Experience Background Desktop.png";

function Experience() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 1;
          const interval = setInterval(() => {
            setCount((prev) => {
              if (prev >= 18) {
                clearInterval(interval);
                return 18;
              }
              return prev + 1;
            });
          }, 100); // speed: lower = faster

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="experience" ref={ref}>
      <img src={DesktopBackground} className="experience-background" />
      <div className="experience-container">
        <p>
          <span>{String(count).padStart(2, "0")}+</span>&nbsp; years of
        </p>
        <p>Industrial Experience</p>
        <p>
          Experience in <span>Tooling Industry</span>
        </p>
      </div>
    </div>
  );
}

export default Experience;
