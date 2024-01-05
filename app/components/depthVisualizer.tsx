"use client"
import { OrderType } from '@/types/enums';
import { DepthVisualizerProps } from '@/types/interfaces';
import { MOBILE_WIDTH } from '@/utils/constants';
import React from 'react';

const DepthVisualizer: React.FC<DepthVisualizerProps> =
  ({ orderType, depth, windowWidth }) => {
    return (
      <>
        <div className={`bg-${orderType === OrderType.BIDS ? 'green' : 'red'}-500 h-3/4 w-${depth} relative top-21 left-${orderType === OrderType.BIDS && windowWidth > MOBILE_WIDTH ? `-${100 - depth}` : '0'} mt-[-24px] z-10`} />
      </>
    )
  }

export default DepthVisualizer;