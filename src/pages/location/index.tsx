import React from 'react';

import { LocationListData } from '../../data/location-data';

import LocationList from '../../views/location/LocationList';
import Footer from '../../views/footer/Footer';

function LocationPage() {
  return (
    <>
      <div className="md:mt-8 flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container space-y-40">
          {
            <LocationList locations={LocationListData}/>
          }
        </div>
      </div>

      <div className="mt-72 md:mt-80 lg:mt-96 w-full">
        <Footer />
      </div>
    </>
  )
}

export default LocationPage;
