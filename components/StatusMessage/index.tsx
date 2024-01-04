import React, { FunctionComponent } from 'react';
import styled from "styled-components";

const Container = styled.div`
  color: white;
  font-size: 1.2em;
  width: 100%;
  text-align: center;
`;

interface StatusMessageProps {
  selectedMarket: string;
  isFeedKilled: boolean;
}

const StatusMessage: FunctionComponent<StatusMessageProps> = ({selectedMarket = '', isFeedKilled}) => {
  return (
    <Container>
      {isFeedKilled ? 'Feed killed.' : `Selected market: ${selectedMarket}`}
    </Container>
  );
};

export default StatusMessage;