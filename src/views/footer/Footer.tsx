import React from 'react';
import Image from 'next/image';

import FooterContact from './FooterContact';
import SocialMedia from './SocialMedia';
import FooterOffice from './FooterOffice';
import FooterNav from './FooterNav';

interface ComponentProps {
  hideContact?: boolean
}

function Footer(props: ComponentProps) {
  return (
    <div className="bg-dark w-full">
      <div className="flex flex-col items-center py-16 px-6 md:px-10 2xl:px-0">
        <div className="container">
          {
            !props.hideContact &&
            <div className="-mt-60 md:-mt-80">
              <FooterContact />
            </div>
          }

          <div className={`${props.hideContact ? 'mt-9' : 'mt-16'} grid grid-cols-1 gap-8 md:grid-cols-3`}>
            <div className="col-start-1 col-end-2 flex justify-center items-center md:justify-start">
              <a href="/">
                <div className="relative h-7 w-52">
                  <Image
                    src="/assets/shared/desktop/logo-light.png"
                    alt="Light logo"
                    quality={100}
                    layout="fill"
                  />
                </div>
              </a>
            </div>

            <div className="h-px w-full bg-white opacity-10 col-start-1 col-end-2 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3"></div>

            <div className="col-start-1 col-end-2 flex flex-col items-center space-y-2 md:col-start-2 md:col-end-4 md:flex-row md:justify-end md:space-y-0 md:space-x-10">
              <FooterNav />
            </div>
          </div>

          <div className="mt-10 flex flex-col md:mt-8 md:flex-row md:justify-between md:items-end">
            <div className="flex flex-col items-center space-y-10 md:items-left md:space-y-0 md:flex-1 md:flex-row md:justify-between md:items-start md:space-x-4">
              <FooterOffice />
            </div>

            <div className="mt-10 flex justify-center md:mt-0 md:flex-1 md:justify-end">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);
