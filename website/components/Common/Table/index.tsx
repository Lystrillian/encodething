import React from 'react';
import styles from './index.module.css'
import { Typography } from '../Typography';

const TableContext = React.createContext({});

const Table = ({ children, ...props }) => {
  return (
    <TableContext.Provider value={{}}>
      <table className={styles.t} {...props}>{children}</table>
    </TableContext.Provider>
  );
};

const TableHead = ({ children, ...props }) => {
  return <thead className={styles.d} {...props}>{children}</thead>;
};

const TableHeader = ({ children, ...props }) => {
  return <th className={styles.h} {...props}>{children}</th>;
};

const TableBody = ({ children, ...props }) => {
  return <tbody className={styles.b} {...props}>{children}</tbody>;
};

const TableRow = ({ children, ...props }) => {
  return <tr className={styles.r} {...props}>{children}</tr>;
};

const TableCell = ({ children, ...props }) => {
  return <td className={styles.c} {...props}>{children}</td>;
};

const TableCaption = ({ children, ...props }) => {
  return <caption className={styles.p} {...props}>{children}</caption>;
};

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
};