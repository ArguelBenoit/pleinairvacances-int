
import React from 'react';

let FakeSection = () => {
  const propsFakeSection = {
    className: 'fake-section',
    style: {
      height: '100vh',
      width: '100vw',
      background: '#333'
    }
  };
  return <div {...propsFakeSection}/>;
};

export default FakeSection;
