import React from 'react';
import styled from 'styled-components';

interface StatusProps {
  message?: string
}

const StatusIndicator: React.FC<StatusProps> = ({ message }) => {
  return (
    <Ment>
      {message}
    </Ment>
  );
}

const Ment = styled.div`
  font-size: 2.8rem;
  color: #333;
  text-align: center;
  margin-top: 15px;
`
export default StatusIndicator;
