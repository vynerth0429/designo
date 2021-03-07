import React from 'react';
import Image from 'next/image';

import ButtonLight from '../button/ButtonLight';

function LandingHeader() {
  return (
    <div className="relative bg-peach overflow-hidden md:rounded-2xl bg-home-header-bg bg-no-repeat bg-left md:-bg-right-40 lg:bg-right-top">
      <div className="px-6 pt-20 flex flex-col items-center md:rounded-2xl lg:flex-row lg:px-24 lg:pt-36 lg:items-start">
        <div className="relative z-20 flex flex-col items-center w-auto lg:items-start md:w-4/5 lg:w-auto">
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
    </div>
  )
}

export default React.memo(LandingHeader);
