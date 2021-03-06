import React from 'react';

import { TLocation } from '../../data/location-data';

import LocationIllustrationItem from './LocationIllustrationItem';

interface ComponentProps {
  locations: TLocation[],
}

function LocationIllustrationList(props: ComponentProps) {
  return (
    <div className="flex flex-col space-y-20 md:space-y-20 lg:flex-row lg:space-y-0 lg:space-x-8 lg:justify-between">
      {
        props.locations.map((location, index) => (
          <LocationIllustrationItem
            key={index}
            location={location}
          />
        ))
      }
    </div>
  )
}

export default React.memo(LocationIllustrationList);
