import { AtomSVG, LampSVG, SOSBoxSVG, SpeechBallonSVG } from '@/components/svg';

export const QUICK_ACTIONS = [
  { Icon: AtomSVG, label: 'Info', color: 'SECONDARY_200' },
  { Icon: LampSVG, label: 'Tips', color: 'PRIMARY_300' },
  { Icon: SOSBoxSVG, label: 'Trials', color: 'PRIMARY_100' },
  { Icon: SpeechBallonSVG, label: 'Community', color: 'TERTIARY_100' },
  { Icon: LampSVG, label: 'Tips', color: 'PRIMARY_300' },
];

export const QUICK_ACTIONS_MAP = {
  info: { Icon: AtomSVG, label: 'Info', color: 'SECONDARY_200' },
  tips: { Icon: LampSVG, label: 'Tips', color: 'PRIMARY_300' },
  trials: { Icon: SOSBoxSVG, label: 'Trials', color: 'PRIMARY_100' },
  community: {
    Icon: SpeechBallonSVG,
    label: 'Community',
    color: 'TERTIARY_100',
  },
};
