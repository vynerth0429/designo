import React from 'react';

import AboutUsHeaderHero from '../../views/header/AboutUsHeaderHero';
import Footer from '../../views/footer/Footer';

function AboutUsPage() {
  return (
    <>
      <div className="md:mt-8 flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container space-y-40">
          <AboutUsHeaderHero />
        </div>
      </div>

      <div className="mt-72 md:mt-80 lg:mt-96  w-full">
        <Footer />
      </div>
    </>
  )
}

export default React.memo(AboutUsPage);
