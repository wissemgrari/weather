import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Night = (props, { width, height }) => (
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
        fill='orange'
        d='m23.3 21.5.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2-1.2-.7 1.2-.6z'
        className='am-weather-moon-star-1'
      />
      <Path
        fill='orange'
        d='m43.3 31.5.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2-1.2-.7 1.2-.6z'
        className='am-weather-moon-star-2'
      />
      <Path
        d='M34.5 33.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z'
        fill='orange'
        stroke='orange'
        strokeLinejoin='round'
        strokeWidth={2}
        className='am-weather-moon'
      />
    </G>
  </Svg>
);

export default Night;
