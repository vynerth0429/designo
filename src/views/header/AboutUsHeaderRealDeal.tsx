import React from 'react';

import useBreakpoints from '../../hooks/useBreakpoints';
import { AboutUsRealDealData } from '../../data/about-us-data';

function AboutUsHeaderRealDeal() {
  const { breakpoint } =  useBreakpoints();
  const [image, setImage] = React.useState('');
  const [imageBG, setImageBG] = React.useState('');

  React.useEffect(() => {
    if (breakpoint === 'xxs') {
      setImage(AboutUsRealDealData.image.mobile);
      setImageBG(AboutUsRealDealData.imageBG.mobile);
    } else if (breakpoint === 'xs') {
      setImage(AboutUsRealDealData.image.mobile);
      setImageBG(AboutUsRealDealData.imageBG.mobile);
    } else if (breakpoint === 'sm') {
      setImage(AboutUsRealDealData.image.mobile);
      setImageBG(AboutUsRealDealData.imageBG.mobile);
    } else if (breakpoint === 'md') {
      setImage(AboutUsRealDealData.image.tablet);
      setImageBG(AboutUsRealDealData.imageBG.tablet);
    } else if (breakpoint === 'lg') {
      setImage(AboutUsRealDealData.image.desktop);
      setImageBG(AboutUsRealDealData.imageBG.desktop);
    } else if (breakpoint === 'xl') {
      setImage(AboutUsRealDealData.image.desktop);
      setImageBG(AboutUsRealDealData.imageBG.desktop);
    } else if (breakpoint === '2xl') {
      setImage(AboutUsRealDealData.image.desktop);
      setImageBG(AboutUsRealDealData.imageBG.desktop);
    } else {
      setImage(AboutUsRealDealData.image.desktop);
      setImageBG(AboutUsRealDealData.imageBG.desktop);
    }
  }, [breakpoint])

  return (
    <>
      {
        image &&
        <div
          className="bg-peach-lighter overflow-hidden flex flex-col bg-no-repeat bg-left-bottom md:bg-contain md:rounded-2xl md:bg-bottom lg:flex-row-reverse lg:bg-left-bottom"
          style={{
            backgroundImage: "url('"+ imageBG +"')"
          }}>
          <div className="relative h-80 w-full overflow-hidden bg-center bg-no-repeat bg-cover lg:h-160 lg:w-120"
            style={{
              backgroundImage: "url('"+ image +"')"
            }}>
          </div>

          <div className="px-6 py-20 flex flex-col space-y-6 md:px-14 md:py-16 md:space-y-8 lg:flex-1 lg:justify-center lg:px-24">
            <div className="text-center lg:text-left">
              <span className="text-h3 text-peach font-medium lg:text-h1">
                { AboutUsRealDealData.title }
              </span>
            </div>

            <div className="space-y-6">
              {
                AboutUsRealDealData.description.map((description, index) => (
                  <div
                    key={index}
                    className="text-center lg:text-left">
                    <span className="text-caption text-grey-dark md:text-base">
                      { description }
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default React.memo(AboutUsHeaderRealDeal);
