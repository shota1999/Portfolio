import React from 'react';
import { icons } from './Icons';
import styles from './Technologies.module.scss';

interface IconItem {
  icon: JSX.Element;
  title: string;
}

const duplicatedIcons = [
  ...icons,...icons,...icons
]

export const Technologies: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Technologies</h1>
      <div className={styles.row}>
      {duplicatedIcons.map((item: IconItem, index: number) => (
        <div className={styles.eachTech} key={index}>
          <div className={styles.iconWrapper}>{item.icon}</div>
          <p>{item.title}</p>
        </div>
      ))}
      </div>
    </div>
  );
};