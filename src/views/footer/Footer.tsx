import React from 'react';
import Image from 'next/image';

import { MenuItemsData } from '../../data/menu-items-data';

import SocialMedia from './SocialMedia';
import FooterContact from './FooterContact';

function Footer() {
  return (
    <div className="bg-dark w-full">
      <div className="flex flex-col items-center py-16 px-6 md:px-10 2xl:px-0">
        <div className="container">
          <div className="-mt-60 md:-mt-80">
            <FooterContact />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-start-1 col-end-2 flex justify-center items-center md:justify-start">
              <div className="relative h-7 w-52">
                <Image
                  src="/assets/shared/desktop/logo-light.png"
                  alt="Dark logo"
                  loading="eager"
                  quality={100}
                  layout="fill"
                />
              </div>
            </div>

            <div className="h-px w-full bg-white opacity-10 col-start-1 col-end-2 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3"></div>

            <div className="col-start-1 col-end-2 flex flex-col items-center space-y-2 md:col-start-2 md:col-end-4 md:flex-row md:justify-end md:space-y-0 md:space-x-10">
              {
                MenuItemsData.map((menuItem, index) => (
                  <div
                    key={index}
                    className="px-6 h-10 flex items-center animated-menu-white md:text-right md:px-0">
                    <span className="uppercase text-body2 text-white">
                      { menuItem.display }
                    </span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mt-10 flex flex-col md:mt-8 md:flex-row md:justify-between md:items-end">
            <div className="flex flex-col items-center space-y-10 md:items-left md:space-y-0 md:flex-1 md:flex-row md:justify-between md:items-start md:space-x-4">
              <div className="flex flex-col text-white opacity-50 text-center space-y-1 md:text-left">
                <span className="font-bold">
                  Designo Central Office
                </span>
                <span>
                  3886 Wellington Street
                </span>
                <span>
                  Toronto, Ontario M9C 3J5
                </span>
              </div>

              <div className="flex flex-col text-white opacity-50 text-center space-y-1 md:text-left">
                <span className="font-bold">
                  Contact Us (Central Office)
                </span>
                <span>
                  P : +1 253-863-8967
                </span>
                <span>
                  M : contact@designo.co
                </span>
              </div>
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
