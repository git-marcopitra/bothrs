import { FC } from 'react';

import { SVGProps } from './svg.types';

const SOSBox: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <rect width="30" height="30" fill="white" fillOpacity="0.01" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.875 11.625H11.625V9.37499H13.875V7.12499H16.125V9.37499H18.375V11.625H16.125V13.875H13.875V11.625ZM22.875 15V11.625L24 15H22.875ZM24 24H6.00001V17.25H10.5V21.75H19.5V17.25H24V24ZM7.12501 11.625V15H6.00001L7.12501 11.625ZM9.375 6.00001H20.625V15H17.25V19.5H12.75V15H9.375V6.00001ZM24 8.25H22.875V3.75H7.125V8.25H6L3.75 15V26.25H26.25V15L24 8.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SOSBox;
