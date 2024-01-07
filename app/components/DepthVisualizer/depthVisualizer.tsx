"use client"
import { DepthVisualizerColors, OrderType } from '@/types/enums';
import { DepthVisualizerProps } from '@/types/interfaces';
import { MOBILE_WIDTH } from '@/utils/constants';
import React from 'react';

const DepthVisualizer: React.FC<DepthVisualizerProps> =
  ({ orderType, depth, windowWidth }) => {
    return (
      <>
        <div
          data-testid="depth-visualizer"
          style={{
            backgroundColor: `${orderType === OrderType.BIDS ? DepthVisualizerColors.BIDS : DepthVisualizerColors.ASKS}`,
            height: "1.250em",
            width: `${depth}%`,
            position: "relative",
            top: 21,
            left: `${orderType === OrderType.BIDS && windowWidth > MOBILE_WIDTH ? `${100 - depth}%` : 0}`,
            marginTop: -24,
            zIndex: 1,
          }} />
      </>
    )
  }

export default DepthVisualizer;
