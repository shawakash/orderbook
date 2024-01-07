import { SendJsonMessage, WebSocketLike } from "react-use-websocket/dist/lib/types";
import { OrderType } from "./enums";

export interface PriceLevelRowProps {
    total: string;
    size: string;
    price: string;
    reversedFieldsOrder: boolean;
    windowWidth: number;
};

export interface OrderBookProps {
    windowWidth: number;
    productId: string;
    isFeedKilled: boolean;
};

export interface Delta {
    bids: number[][];
    asks: number[][];
};

export interface TitleRowProps {
    reversedFieldsOrder?: boolean;
    windowWidth: number;
};

export interface SpreadProps {
    bids: number[][];
    asks: number[][];
};

export interface StatusMessageProps {
    selectedMarket: string;
    isFeedKilled: boolean;
};

export interface HeaderProps {
  options: number[];
};

export interface GroupingSelectBoxProps {
    options: number[];
};

export interface FooterProps {
    toggleFeedCallback: () => void;
    killFeedCallback: () => void;
    isFeedKilled: boolean;
};

export interface DepthVisualizerProps {
    orderType: OrderType,
    depth: number,
    windowWidth: number
};

export interface ButtonProps {
  title: string;
  backgroundColor: string;
  callback: () => void;
};