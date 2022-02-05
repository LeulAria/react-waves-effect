import React from 'react';

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

const Ripple = ({
  pointer = true,
  radius = '50%',
  color = '#FFF',
  endWidth = '500px',
  endHeight = '500px',
  animationEasing = 'linear',
  animationDuration = 700,
  onClick,
  children,
}: IProps) => {
  // const charset: string =
  //   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  // const id = `${[...Array(5)]
  //   .map((_) => charset[Math.floor(Math.random() * charset.length)])
  //   .join('')}id`;

  const buttonRef = React.useRef<HTMLDivElement>(null);

  const addRipple = (e: any) => {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const ripples = document.createElement('span');
    ripples.classList.add('wave');
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;

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

    buttonRef.current?.appendChild(ripples);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      // id={`${id}`}
      ref={buttonRef}
      onClick={addRipple}
      style={{
        width: 'max-content',
        height: 'max-content',
        overflow: 'hidden',
        position: 'relative',
        cursor: `${pointer && 'pointer'}`,
      }}
    >
      {children}
    </div>
  );
};

export default Ripple;