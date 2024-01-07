"use client";
import { OrderType, ProductIDS } from '@/types/enums';
import React, { useEffect, useState } from 'react'
import GlobalStyle from "./style/global";
import { Options, ProductsMap } from '@/utils/constants';
import Header from '../Header/header';
import OrderBook from '../Orderbook/orderbook';
import StatusMessage from '../StatusMessage/statusMesage';
import Footer from '../Footer/footer';
import { useAppDispatch } from './hooks';
import { clearOrdersState } from '@/recoil/orderbookSlice';
import { Provider } from 'react-redux';
import { store } from '@/recoil/store';

const Client = () => {
  return (<>
      <Provider store={store}>
        <Child />
      </Provider>

  </>);
}

const Child = () => {
  const [orderType, setOrderType] = useState<OrderType>(OrderType.BIDS);
  const [depth, setDetph] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [productId, setProductId] = useState<ProductIDS>(ProductIDS.XBTUSD);
  const [isFeedKilled, setIsFeedKilled] = useState<boolean>(false);
  const [isPageVisible, setIsPageVisible] = useState<boolean>(true);
  const dispatch = useAppDispatch();

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

  const toggleProductId = (): void => {
    dispatch(clearOrdersState());
    setProductId(ProductsMap[productId]);
  };


  const toggleFeed = (): void => {
    setIsFeedKilled(!isFeedKilled);
  }
  return (
    <>
        {isPageVisible ? <>
          <GlobalStyle />
          <Header options={Options[productId]} />
          <OrderBook windowWidth={windowWidth} productId={productId} isFeedKilled={isFeedKilled} />
          <Footer toggleFeedCallback={toggleProductId} killFeedCallback={toggleFeed} isFeedKilled={isFeedKilled} />
          <StatusMessage isFeedKilled={isFeedKilled} selectedMarket={productId} />
        </> : 'HIDDEN PAGE.'}
    </>
  );
}

export default Client;