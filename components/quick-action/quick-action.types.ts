import { FC } from 'react';

import { SVGProps } from '../svg/svg.types';

export interface QuickActionProps {
  label?: string;
  color: string;
  Icon: FC<SVGProps>;
}
