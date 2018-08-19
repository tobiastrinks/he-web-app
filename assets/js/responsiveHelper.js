import { breakpoints } from '~/assets/config/styleConfig';

export const getActiveBreakpoint = (screenWidth) => {
  if (screenWidth > breakpoints.lg) {
    return 'lg';
  } else if (screenWidth > breakpoints.md) {
    return 'md';
  } else {
    return 'sm';
  }
};
