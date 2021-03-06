import { screens } from 'tailwindcss/defaultTheme';
import React from 'react';

const kNewScreens = {
  xxs: '320px',
  xs: '375px',
  ...screens
}

const defaultBreakpoint = 'xs';

const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = React.useState(defaultBreakpoint);

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const width = window.innerWidth;

      let newBreakpoint: string = defaultBreakpoint;

      Object.keys(kNewScreens).forEach((key) => {
        const breakpointWidth: any = kNewScreens[key];
        const numbericWidth = breakpointWidth.replaceAll(/[^\d]/g, "");

        if (width >= numbericWidth) {
          newBreakpoint = key;
        }
      });

      setBreakpoint(newBreakpoint);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return {
    breakpoint
  };
};

export default useBreakpoints;
