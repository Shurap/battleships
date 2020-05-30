import React from 'react';
// import styles from './SvgText.module.scss';

const SvgText = () => {
  return (

    <svg /*width="620" height="200"*/ viewBox="0 0 620 200">
      <defs>
        <path id="path" d="M3.858,58.607 c16.784-5.985,33.921-10.518,51.695-12.99c50.522-7.028,101.982,0.51,151.892,8.283c17.83,2.777,35.632,5.711,53.437,8.628 c51.69,8.469,103.241,11.438,155.3,3.794c53.714-7.887,106.383-20.968,159.374-32.228c11.166-2.373,27.644-7.155,39.231-4.449" />
      </defs>
      <text /*x="2" y="40%" fill="#765373" fontSize="30" fontFamily="'Lato', sans-serif"*/>
        <textPath xlinkHref="#path">This is modified game Battle Sea. 2621754@mail.ru</textPath>
      </text>
    </svg>
  )
}

export default SvgText;