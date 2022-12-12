import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Rainy = (props, { width, height }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='10 10 40 40'
    {...props}
  >
    <Defs></Defs>
    <G filter='url(#a)'>
      <Path
        d='M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z'
        fill='#57A0EE'
        stroke='#FFF'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
      <G
        fill='none'
        stroke='#91C0F8'
        strokeDasharray='0.1,7'
        strokeLinecap='round'
        strokeWidth={3}
      >
        <Path className='am-weather-rain-1' d='m25.902 46.117-1.389 7.878' />
        <Path className='am-weather-rain-2' d='m31.174 45.015-1.39 7.879' />
        <Path className='am-weather-rain-1' d='m35.924 46.868-1.39 7.879' />
      </G>
    </G>
  </Svg>
);

export default Rainy;
