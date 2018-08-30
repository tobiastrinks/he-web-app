import { breakpoints } from '~/assets/config/styleConfig';

const breakpointKeys = Object.keys(breakpoints);

export const getActiveBreakpoint = (screenWidth, givenBreakpoints = breakpointKeys) => {
  for (let x = 0; x < breakpointKeys.length; x++) {
    let breakpointKey = breakpointKeys.reverse()[x];
    if (screenWidth >= breakpoints[breakpointKey] && givenBreakpoints.includes(breakpointKey)) {
      return breakpointKey;
    }
  }
};
