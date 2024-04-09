import React from 'react';
import styles from './Alert.module.css';
import { AlertContainer } from '@salesforce/design-system-react';
import { Icon } from '@salesforce/design-system-react/components';

interface AlertProps {
    variant: 'error' | 'success' | 'warning' | 'info';
    children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant, children }) => {
    return <div className={`${styles.alert} ${styles[variant]}`}>{children}</div>;
};


export default Alert;