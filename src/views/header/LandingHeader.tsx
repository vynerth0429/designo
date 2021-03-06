import React from 'react';
import Image from 'next/image';

import useBreakpoints from '../../hooks/useBreakpoints';

import ButtonLight from '../button/ButtonLight';

function LandingHeader() {
  const { breakpoint } = useBreakpoints();
  const [images, setImages] = React.useState({

  })

  React.useEffect(() => {

  }, [breakpoint])
  return (
    <div className="relative bg-peach overflow-hidden md:rounded-2xl">
      <div className="relative z-10 px-6 pt-20 flex flex-col items-center md:rounded-2xl lg:flex-row lg:px-24 lg:pt-36 lg:items-start">
        <div className="flex flex-col items-center w-auto lg:items-start md:w-4/5 lg:w-auto">
          <div className="text-center lg:text-left">
            <span className="text-h3 text-white font-medium">
              Award-winning custom designs and digital branding solutions
            </span>
          </div>

          <div className="mt-4 text-center lg:text-left">
            <span className="text-caption text-white">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </span>
          </div>

          <div className="mt-6 inline-block">
            <ButtonLight label="Learn more" onClick={null}/>
          </div>
        </div>

        <div className="relative -mr-0 -mb-80 lg:-mb-56 lg:-mr-40">
          <img
            src="/assets/home/desktop/image-hero-phone.png"
            alt=""
            width="600px"
            className="-mt-24 max-w-none lg:-mt-40"/>
        </div>
      </div>

      <div className="absolute left-0 -right-72 top-24 bottom-0 bg-home-header-bg bg-no-repeat bg-right-top sm:-right-56 md:-right-40 lg:right-0 lg:top-0"></div>
    </div>
  )
}

export default React.memo(LandingHeader);
