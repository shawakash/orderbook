import DepthVisualizer from '@/components/DepthVisualizer';
import { OrderType } from '@/types/Order';
import { useState } from 'react';
import {RecoilRoot} from "recoil";

export const MOBILE_WIDTH = 120;

export default function Home() {
  const [orderType, setOrderType] = useState<OrderType>(OrderType.BIDS);
  const [depth, setDetph] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DepthVisualizer 
          orderType={orderType}
          depth={depth}
          windowWidth={windowWidth}
        />
      </main>
  )
}
