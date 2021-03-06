import React from 'react'
import Image from 'next/image';

import { MenuItemsData } from '../../data/menu-items-data';

function MenuView() {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="fixed z-50 left-0 top-0 right-0 h-24 px-6 flex justify-center sm:h-auto sm:px-10 sm:pt-16 sm:pb-8 bg-white 2xl:px-0">
      <div className="container flex items-center justify-between">
        <a href="/">
          <div className="flex-none relative h-7 w-52">
            <Image
              src="/assets/shared/desktop/logo-dark.png"
              alt="Dark logo"
              loading="eager"
              quality={100}
              layout="fill"
            />
          </div>
        </a>

        <div className="hidden sm:flex justify-end space-x-10">
          {
            MenuItemsData.map((menuItem, index) => (
              <div
                key={index}
                className="animated-menu menu-white">
                <span className="uppercase text-body2 text-grey-dark">
                  { menuItem.display }
                </span>
              </div>
            ))
          }
        </div>

        <div className="sm:hidden">
          <div className="relative h-5 w-6 cursor-pointer hover:opacity-75"
            onClick={toggleMenuVisibility}>
            <Image
              src={
                showMenu
                ? '/assets/shared/mobile/icon-close.svg'
                : '/assets/shared/mobile/icon-hamburger.svg'
              }
              alt="Hamburger icon"
              loading="eager"
              quality={100}
              layout="fill"
            />
          </div>

          <div className={`${showMenu ? 'block' : 'hidden'} absolute left-0 right-0 top-24 bg-dark py-8`}>
            {
              MenuItemsData.map((menuItem, index) => (
                <div
                  key={index}
                  className="px-6 h-10 flex items-center animated-menu-white">
                  <span className="uppercase text-body2 text-white">
                    { menuItem.display }
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(MenuView);
