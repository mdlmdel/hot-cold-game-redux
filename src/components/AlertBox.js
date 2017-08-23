import React from 'react';

const checkColor = color => {
  switch (color) {
    case '#10316B':
    case '#0B409C': 
    case '#FB9935':
    case '#B90B0B':
    case '#8C0909':
      return 'white';
    default: 
      return 'white'; 
  }
}

export default function AlertBox({backgroundColor, text}) {
  return (
    <div style={{backgroundColor, height: 30, width: 100}} className="Guess">
      <p style={{textAlign: "center", color: checkColor(backgroundColor)}} className="Guess">{text}</p>
    </div>
  )
}