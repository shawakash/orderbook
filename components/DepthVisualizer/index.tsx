import { MOBILE_WIDTH } from '@/app/page';
import { OrderType } from '@/types/Order';
import React from 'react';

const DepthVisualizer: React.FC<{
    orderType: OrderType,
    depth: number,
    windowWidth: number
}> = ({orderType, depth, windowWidth}) => {
  return (
    <>
      <div className={`bg-${orderType === OrderType.BIDS ? 'green' : 'red'}-500 h-3/4 w-${depth} relative top-21 left-${orderType === OrderType.BIDS && windowWidth > MOBILE_WIDTH ? `-${100 - depth}` : '0'} mt-[-24px] z-10`} />
    </>
  )
}

export default DepthVisualizer;