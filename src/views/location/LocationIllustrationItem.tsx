import React from 'react'

import { TLocation } from '../../data/location-data';

import ButtonPrimary from '../button/ButtonPrimary';

interface ComponentProps {
  location: TLocation,
}

function LocationIllustrationItem(props: ComponentProps) {
  return (
    <div className="flex flex-col item-center space-y-12 lg:flex-1">
      <div
        className="relative flex-none flex justify-center bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/home/desktop/bg-pattern-hero-home.svg')"
        }}>
        <img src={props.location.illustration} alt=""/>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <span className="uppercase text-h5 text-grey-dark font-medium">
            { props.location.name }
          </span>
        </div>
        <div className="text-center">
          <div className="inline-block">
            <a href="/location">
              <ButtonPrimary label="See Location" onClick={null}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LocationIllustrationItem);
