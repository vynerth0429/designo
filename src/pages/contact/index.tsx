import React from 'react';

import { LocationListData } from '../../data/location-data';

import ContactForm from '../../views/contact/ContactForm';
import LocationIllustrationList from '../../views/location/LocationIllustrationList';
import Footer from '../../views/footer/Footer';

function ContactPage() {
  return (
    <div id="contact">
      <div className="md:mt-8 flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container space-y-40">
          <ContactForm />
        </div>
      </div>

      <div className="mt-32 md:mt-40 flex flex-col items-center px-6 md:px-10 2xl:px-0">
        <div className="container">
          <LocationIllustrationList locations={LocationListData}/>
        </div>
      </div>

      <div className="mt-32 md:mt-32 lg:mt-40 w-full">
        <Footer hideContact={true}/>
      </div>
    </div>
  )
}

export default ContactPage;
