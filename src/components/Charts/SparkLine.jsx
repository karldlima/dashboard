import React from 'react'
import { Sparkline, Inject, SparklineTooltip, SparklineComponent } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return (
  <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color}
    border={{ color: currentColor, width: 2 }} xName='x' yName='yval' dataSource={data}
    // To enable tooltip for sparkline
    tooltipSettings={{
      visible: true,
      // formatting tooltip text
      format: '${x} : ${yval}',
      trackLineSettings: {
        visible: true,
      },
    }}
    markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    // type={type}
  >
    <Inject services={[SparklineTooltip]}/>
  </SparklineComponent>
  )
}

export default SparkLine