import React, {useRef, useState} from "react";
import "./ripple.css";
interface IProps {
  pointer?: boolean;
  radius?: string;
  color?: string;
  endWidth?: string;
  endHeight?: string;
  animationEasing?: string;
  animationDuration?: number;
  onClick?: () => void;
  children:
    | string
    | JSX.Element
    | JSX.Element[]
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChildren[];
}

export const Ripple = ({
  pointer = true,
  radius = "50%",
  color = "#FFF",
  endWidth = "500px",
  endHeight = "500px",
  animationEasing = "linear",
  animationDuration = 700,
  onClick,
  children,
}: IProps) => {
  const charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const id = [...Array(5)]
    .map((_) => charset[Math.floor(Math.random() * charset.length)])
    .join("");

  const addRipple = (e: any) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.classList.add("wave");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    // add style
    ripples.style.width = endWidth;
    ripples.style.height = endHeight;
    ripples.style.background = color;
    ripples.style.borderRadius = radius;
    ripples.style.position = `absolute`;
    ripples.style.pointerEvents = `none`;
    ripples.style.transform = `translate(-50%, -50%)`;
    ripples.style.animation = `wave-animate ${animationDuration}ms ${animationEasing} forwards`;

    setTimeout(() => {
      ripples.remove();
    }, animationDuration);

    document.querySelector(`#${id}`)?.appendChild(ripples);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      id={id}
      onClick={addRipple}
      style={{
        width: "max-content",
        height: "max-content",
        overflow: "hidden",
        position: "relative",
        cursor: `${pointer && "pointer"}`,
      }}
    >
      {children}
    </div>
  );
};
