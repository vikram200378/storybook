// src/components/Accordion.tsx

import React, { useState } from 'react';
import styles from './Accordion.module.css'; // Import CSS module for component styling

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${
              activeIndex === index ? styles.active : ''
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
