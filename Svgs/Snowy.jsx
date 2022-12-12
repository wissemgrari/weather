import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Snowy = (props, { width, height }) => (
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
        className='am-weather-cloud-2'
      />
      <G
        fill='none'
        stroke='#57A0EE'
        strokeLinecap='round'
        className='am-weather-snow-1'
      >
        <Path strokeWidth={1.2} d='M23 44.5v5' />
        <Path d='m24.768 45.232-3.536 3.536M25.5 47h-5M24.768 48.768l-3.536-3.536' />
      </G>
      <G
        fill='none'
        stroke='#57A0EE'
        strokeLinecap='round'
        className='am-weather-snow-2'
      >
        <Path strokeWidth={1.2} d='M31 44.5v5' />
        <Path d='m32.768 45.232-3.536 3.536M33.5 47h-5M32.768 48.768l-3.536-3.536' />
      </G>
      <G
        fill='none'
        stroke='#57A0EE'
        strokeLinecap='round'
        className='am-weather-snow-3'
      >
        <Path strokeWidth={1.2} d='M40 44.5v5' />
        <Path d='m41.768 45.232-3.536 3.536M42.5 47h-5M41.768 48.768l-3.536-3.536' />
      </G>
    </G>
  </Svg>
);

export default Snowy;
