import { FC } from 'react';

import { SVGProps } from './svg.types';

const Random: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <circle cx="13" cy="13" r="13" fill="#EB498A" />
    <mask
      id="mask0_3185_822"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="26"
      height="26"
    >
      <circle cx="13" cy="13" r="13" fill="#EB498A" />
    </mask>
    <g mask="url(#mask0_3185_822)">
      <rect
        x="11.3042"
        y="12.4348"
        width="15.8261"
        height="14.6957"
        fill="#52D1B7"
      />
      <path
        d="M10.739 4.52173L18.0814 17.2391H3.39661L10.739 4.52173Z"
        fill="white"
      />
    </g>
  </svg>
);

export default Random;
