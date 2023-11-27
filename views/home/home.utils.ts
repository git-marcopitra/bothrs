export const getDaysFromNow = (date: string) =>
  ~~((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
