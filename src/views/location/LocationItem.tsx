import React from 'react';

import useBreakpoints from '../../hooks/useBreakpoints';
import { TLocation } from '../../data/location-data';

interface ComponentProps {
  location: TLocation,
  reverse?: boolean,
}

function LocationItem(props: ComponentProps) {
  const { breakpoint } =  useBreakpoints();
  const [imageMap, setImageMap] = React.useState('');

  React.useEffect(() => {
    if (breakpoint === 'xxs') {
      setImageMap(props.location.imageMap.mobile);
    } else if (breakpoint === 'xs') {
      setImageMap(props.location.imageMap.mobile);
    } else if (breakpoint === 'sm') {
      setImageMap(props.location.imageMap.mobile);
    } else if (breakpoint === 'md') {
      setImageMap(props.location.imageMap.tablet);
    } else if (breakpoint === 'lg') {
      setImageMap(props.location.imageMap.desktop);
    } else if (breakpoint === 'xl') {
      setImageMap(props.location.imageMap.desktop);
    } else if (breakpoint === '2xl') {
      setImageMap(props.location.imageMap.desktop);
    } else {
      setImageMap(props.location.imageMap.desktop);
    }
  }, [breakpoint])

  return (
    <>
      {
        imageMap &&
        <div
          className={`overflow-hidden flex flex-col md:space-y-6 lg:space-y-0 lg:space-x-7 ${props.reverse ? 'lg:flex-row-reverse lg:space-x-reverse' : 'lg:flex-row'}`}>
          <div className="relative h-80 w-full overflow-hidden bg-center bg-no-repeat bg-cover md:rounded-2xl lg:h-80 lg:w-80"
            style={{
              backgroundImage: "url('"+ imageMap +"')"
            }}>
          </div>

          <div
            className="bg-peach-lighter px-6 py-20 flex flex-col bg-no-repeat bg-left-top space-y-6 md:rounded-2xl md:px-20 md:py-20 md:bg-left-bottom md:items-start lg:flex-1 lg:justify-center lg:px-24"
            style={{
              backgroundImage: "url('"+ props.location.imageBG +"')"
            }}>
            <div className="text-center lg:text-left">
              <span className="text-h3 text-peach font-medium md:text-h2">
                { props.location.name }
              </span>
            </div>

            <div className="space-y-6 flex flex-col md:flex-row md:justify-between md:space-y-0 md:w-full">
              <div className="flex flex-col items-center space-y-1 md:items-start md:flex-1">
                <div className="text-center md:text-left">
                  <span className="text-caption text-grey-dark font-bold md:text-base">
                    { props.location.address.name }
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="text-caption text-grey-dark md:text-base">
                    { props.location.address.street }
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="text-caption text-grey-dark md:text-base">
                    { props.location.address.city }
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1 md:items-start md:flex-1">
                <div className="text-center md:text-left">
                  <span className="text-caption text-grey-dark font-bold md:text-base">
                    Contact
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="text-caption text-grey-dark md:text-base">
                    { `P : ${props.location.contact.phone}` }
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="text-caption text-grey-dark md:text-base">
                    { `P : ${props.location.contact.email}` }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default React.memo(LocationItem);
