import React from 'react';
import styles from './SvgDraft.module.scss';

export const SvgDraft = () => {
  return (
    <svg className={styles.svg} viewBox="-50 -30 600 600" transform="scale(1, -1)">

      <defs>
        <linearGradient id="left-to-right">
          <stop offset="0" stop-color="#8b00ff">
            <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1" begin="2s"/>
          </stop>
          <stop offset="0" stop-color="rgba(10, 10, 10, 0.0)">
            <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1" begin="2s"/>
          </stop>

        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="3" fill="url(#left-to-right)"
        d="m34.97813,21.70979l-33.55223,0.47088l-0.0394,-13.57138l34.2665,-0.47295l-0.0208,-7.14282l14.50618,14.42226l-14.95643,15.04345l-0.20382,-8.74944z"
      />
    </svg>
  )
}

export default SvgDraft;




{/* <defs>
<linearGradient id="fill">
  <stop offset="0" stop-color="black">
    <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1"/>
  </stop>
</linearGradient>
</defs> */}