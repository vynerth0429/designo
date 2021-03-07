import React from 'react';

import { MenuItemsData } from '../../data/menu-items-data';

function FooterNav() {
  return (
    <>
      {
        MenuItemsData.map((menuItem, index) => (
          <a key={index}
            href={menuItem.link}>
            <div className="px-6 h-10 flex items-center animated-menu-white md:text-right md:px-0">
              <span className="uppercase text-body2 text-white">
                { menuItem.display }
              </span>
            </div>
          </a>
        ))
      }
    </>
  )
}

export default React.memo(FooterNav);
