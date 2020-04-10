import React from 'react';
import '../styles.css';

export default function Header({title}) {
  return (
    <header>
      <h1 className="header">{title}</h1>
    </header>
  );
}