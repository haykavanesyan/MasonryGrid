import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SmallSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1); 
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;

const BigSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1); 
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export const Loader: React.FC<{ size: 'small' | 'big'}> = ({ size }) => (
  size === 'small' ? <SmallSpinner /> : <BigSpinner />
);
