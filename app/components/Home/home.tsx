"use client";
import { OrderType, ProductIDS } from '@/types/enums';
import React, { useEffect, useState } from 'react'
import DepthVisualizer from '../DepthVisualizer/depthVisualizer';
import { RecoilRoot } from 'recoil';
import OrderBook from '../Orderbook/orderbook';

const ClientHome = () => {
    const [orderType, setOrderType] = useState<OrderType>(OrderType.BIDS);
    const [depth, setDetph] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [productId, setProductId] = useState<ProductIDS>(ProductIDS.XBTUSD);
    const [isFeedKilled, setIsFeedKilled] = useState<Boolean>(false);
    const [isPageVisible, setIsPageVisible] = useState<Boolean>(true);
  
    // Window width detection
    useEffect(() => {
      window.onresize = () => {
        setWindowWidth(window.innerWidth);
      }
      setWindowWidth(() => window.innerWidth);
    }, []);
  
    // Page Visibility detection
    useEffect(() => {
      // Set the name of the hidden property and the change event for visibility
      let hidden: string = '';
      let visibilityChange: string = '';
  
      if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      } else { // @ts-ignore
        if (typeof document.msHidden !== 'undefined') {
          hidden = 'msHidden';
          visibilityChange = 'msvisibilitychange';
        } else { // @ts-ignore
          if (typeof document.webkitHidden !== 'undefined') {
            hidden = 'webkitHidden';
            visibilityChange = 'webkitvisibilitychange';
          }
        }
      }
  
      const handleVisibilityChange = () => {
        const isHidden = document['hidden'];
        if (isHidden) {
          document.title = 'Orderbook Paused | AS';
          setIsPageVisible(false);
        } else {
          document.title = 'Orderbook | AS';
          setIsPageVisible(true);
        }
      };
  
      // Warn if the browser doesn't support addEventListener or the Page Visibility API
      if (typeof document.addEventListener === 'undefined' || hidden === '') {
        console.log('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
      } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
      }
    }, []);
  
  
  
    const toggleFeed = (): void => {
      setIsFeedKilled(!isFeedKilled);
    }
    return (
        <RecoilRoot>
          <DepthVisualizer
            orderType={orderType}
            depth={depth}
            windowWidth={windowWidth}
          />
        </RecoilRoot>
    );
}

export default ClientHome