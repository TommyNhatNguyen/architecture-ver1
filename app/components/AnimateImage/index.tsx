import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const AnimateImage = ({ children, className }: Props) => {
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom bottom",
      },
      filter: "blur(15px)",
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.to(imageRef.current?.querySelector(".overlay") as HTMLElement, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom bottom",
      },
      filter: "blur(15px)",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, {});
  return (
    <div
      className={`animate-image ${className}`}
      data-animate="img-fade-in"
      ref={imageRef}
    >
      {children}
      <div className="overlay"></div>
    </div>
  );
};

export default AnimateImage;
