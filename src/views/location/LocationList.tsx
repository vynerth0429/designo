import React from 'react';

import { TLocation } from '../../data/location-data';

import LocationItem from './LocationItem';

interface ComponentProps {
  locations: TLocation[],
}

function LocationList(props: ComponentProps) {
  return (
    <div className="flex flex-col space-y-10 md:space-y-28 lg:space-y-8">
      {
        props.locations.map((location, index) => (
          <LocationItem
            key={index}
            location={location}
            reverse={index % 2 === 0}
          />
        ))
      }
    </div>
  )
}

export default React.memo(LocationList);
