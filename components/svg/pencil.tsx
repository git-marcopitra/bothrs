import { FC } from 'react';

import { SVGProps } from './svg.types';

const Pencil: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      d="M8.71436 2.71428L11.2858 5.28571"
      stroke="currentColor"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4286 1L13 3.57143L4.42857 12.1429L1 13L1.85714 9.57143L10.4286 1Z"
      stroke="currentColor"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Pencil;
