import { breakpoints } from '~/assets/config/styleConfig';

const breakpointKeys = Object.keys(breakpoints);

export const getActiveBreakpoint = (screenWidth, givenBreakpoints = breakpointKeys) => {
  const breakpointKeysReverse = breakpointKeys.slice();
  breakpointKeysReverse.reverse();

  for (let x = 0; x < breakpointKeysReverse.length; x++) {
    let breakpointKey = breakpointKeysReverse[x];
    if (screenWidth >= breakpoints[breakpointKey] && givenBreakpoints.includes(breakpointKey)) {
      return breakpointKey;
    }
  }
};
