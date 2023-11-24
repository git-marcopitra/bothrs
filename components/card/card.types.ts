import { FC } from 'react';

import { SVGProps } from '../svg/svg.types';

interface IButton {
  text: string;
  action: () => void;
}

export interface CardProps {
  title: string;
  iconColor: string;
  Icon: FC<SVGProps>;
  buttons: ReadonlyArray<IButton>;
}
