import React from 'react';

import { TCoreValue } from '../../data/core-values-data';

interface ComponentProps {
  coreValue: TCoreValue
}


function CoreValueItem(props: ComponentProps) {
  return (
    <div className="flex flex-col item-center space-y-12 md:flex-row md:space-y-0 md:space-x-12 lg:flex-col lg:items-center lg:space-y-12">
      <div
        className="relative flex-none flex justify-center bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/home/desktop/bg-pattern-hero-home.svg')"
        }}>
        <img src={props.coreValue.image} alt=""/>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-4 md:justify-center lg:flex-col lg:items-center">
        <div className="text-center md:text-left lg:text-center">
          <span className="uppercase text-h5 text-grey-dark font-medium">
            { props.coreValue.title }
          </span>
        </div>
        <div className="text-center md:text-left lg:text-center">
          <span>
            { props.coreValue.subtitle }
          </span>
        </div>
      </div>
    </div>
  )
}

export default CoreValueItem;
