import React from 'react';

const TableContext = React.createContext({});

const Table = ({ children, ...props }) => {
  return (
    <TableContext.Provider value={{}}>
      <table {...props}>{children}</table>
    </TableContext.Provider>
  );
};

const TableHead = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>;
};

const TableHeader = ({ children, ...props }) => {
  return <th {...props}>{children}</th>;
};

const TableBody = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};

const TableRow = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

const TableCell = ({ children, ...props }) => {
  return <td {...props}>{children}</td>;
};

const TableCaption = ({ children, ...props }) => {
  return <caption {...props}>{children}</caption>;
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