"use client";
import React from 'react'
import { Provider } from 'react-redux';
import { store } from '@/recoil/store';
import Child from './child';

const Client: React.FC<{}> = ({  }) => {
  return (<>
    <Provider store={store}>
      <Child />
    </Provider>
  </>);
}

export default Client;