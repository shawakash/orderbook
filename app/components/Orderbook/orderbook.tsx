import React, { FunctionComponent, useEffect } from 'react';
import useWebSocket from "react-use-websocket";
import { Container } from "./styles";
import { OrderBookProps } from '@/types/interfaces';

let currentBids: number[][] = []
let currentAsks: number[][] = []

const OrderBook: FunctionComponent<OrderBookProps> = ({ windowWidth, productId, isFeedKilled }) => {
  
  return (
    <Container>
    </Container>
  )
};

export default OrderBook;