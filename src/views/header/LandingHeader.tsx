import React from 'react';
import Image from 'next/image';

import ButtonLight from '../button/ButtonLight';

function LandingHeader() {
  return (
    <div className="relative bg-peach overflow-hidden md:rounded-2xl bg-home-header-bg bg-no-repeat bg-left md:-bg-right-40 lg:bg-right-top">
      <div className="px-6 pt-20 flex flex-col items-center md:rounded-2xl lg:flex-row lg:px-24 lg:pt-36 lg:items-start">
        <div className="relative z-20 flex flex-col items-center w-auto lg:items-start md:w-4/5 lg:w-auto">
          <div className="text-center lg:text-left">
            <span className="text-h3 text-white font-medium md:text-h1">
              Award-winning custom designs and digital branding solutions
            </span>
          </div>

          <div className="mt-4 text-center lg:text-left">
            <span className="text-caption text-white md:text-base">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </span>
          </div>

          <div className="mt-6 inline-block">
            <ButtonLight label="Learn more" onClick={null}/>
          </div>
        </div>

        <div className="relative">
          <img
            src="/assets/home/desktop/image-hero-phone.png"
            alt="Home hero image"
            width={600}
            className="-mt-24 -mr-0 -mb-80 max-w-none lg:-mb-56 lg:-mr-40 lg:-mt-40"/>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LandingHeader);
