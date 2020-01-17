import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 120px;
  height: 20px;
  position: relative;
  background-color: #f3f3f3;
  overflow: hidden;

  &::after {
    content: '';
    width: 40px;
    height: 10px;
    background-color: #3498db;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    animation: progress 2s linear infinite;
  }

  @keyframes progress {
    0% {
      right: -100%;
      left: -100%;
    }
    50% {
      right: 0;
      left: 0;
    }
    100% {
      right: 100%;
      left: 100%;
    }
  }
`;

function BarLoader({ className }) {
  return <Bar className={className} />;
}

export default BarLoader;
