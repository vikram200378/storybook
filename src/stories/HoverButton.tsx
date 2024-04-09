import React, { useState } from 'react';
import styles from './HoverButton.module.css';

export type Props = {
  initialLabel: string;
  clickedLabel: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  label?:string
};

const HoverButton: React.FC<Props> = ({
  initialLabel,
  clickedLabel,

  width = 'auto',
  height = '40px',
  backgroundColor = '#0070f3',
}) => {
  const [label, setLabel] = useState(initialLabel); // Initialize label with initialLabel

  const buttonStyle = {
    width,
    height,
    backgroundColor,
  };

  const handleClick = () => {
    const newLabel = label === initialLabel ? clickedLabel : initialLabel;
    setLabel(newLabel);
  };

  return (
    <button
      style={buttonStyle}
      className={styles.hoverButton}
      onClick={handleClick} // Handle click to toggle label
    >
      {label}
    </button>
  );
};

export default HoverButton;
