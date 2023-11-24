export enum RoutesEnum {
  Home = 'home',
  Profile = 'profile',
  Stats = 'stats',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.Profile]: '/profile',
  [RoutesEnum.Stats]: '/stats',
};
