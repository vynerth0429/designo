import React from 'react';

import AboutUsHeader from '../../views/header/AboutUsHeader';
import Footer from '../../views/footer/Footer';

function AboutUsPage() {
  return (
    <>
      <div className="md:mt-8 flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container space-y-40">
          <AboutUsHeader />
        </div>
      </div>

      <div className="mt-72 md:mt-80 lg:mt-96  w-full">
        <Footer />
      </div>
    </>
  )
}

export default React.memo(AboutUsPage);
