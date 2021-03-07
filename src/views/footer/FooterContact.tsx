import React from 'react';

import ButtonLight from '../button/ButtonLight';

function FooterContact() {
  return (
    <div className="rounded-2xl bg-peach w-full flex justify-center py-16 px-6 bg-footer-contact-bg bg-right bg-no-repeat md:py-14 md:px-14 lg:py-20 lg:px-24">
      <div className="flex flex-col items-center w-full md:w-4/5 lg:flex-row lg:justify-between lg:w-full">
        <div className="space-y-4 md:flex md:flex-col md:items-center lg:items-start lg:w-1/2">
          <div className="text-center md:w-2/3 lg:text-left">
            <span className="text-h3 text-white font-medium md:text-h2">
              Let’s talk about your project
            </span>
          </div>
          <div className="text-center lg:text-left">
            <span className="text-caption text-white">
              Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </span>
          </div>
        </div>

        <div>
          <div className="mt-6 inline-block">
            <a href="/contact">
              <ButtonLight label="Get in touch" onClick={null}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(FooterContact);
