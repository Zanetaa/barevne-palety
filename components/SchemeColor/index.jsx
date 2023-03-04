import React from 'react';
import './style.css';

export const SchemeColor = ({ colors }) => {
  return (
    <div className="scheme_color" style={{ backgroundColor: color }}>
      {colors}
    </div>
  );
};
