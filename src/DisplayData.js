

import React from 'react';
import './Display.css';

const DisplayData = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{`${item.route} ${item.id} by User ${item.userId}`}</h2>
          <p>{item.title}</p>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;