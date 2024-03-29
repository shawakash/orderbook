export const MOBILE_WIDTH: number = 800; // px
export const ORDERBOOK_LEVELS: number = 25; // rows count
export const WSS_FEED_URL: string = 'wss://www.cryptofacilities.com/ws/v1';
export const Options = {
    PI_XBTUSD: [0.5, 1, 2.5],
    PI_ETHUSD: [0.05, 0.1, 0.25]
};
export const ProductsMap: any = {
    "PI_XBTUSD": "PI_ETHUSD",
    "PI_ETHUSD": "PI_XBTUSD",
  }