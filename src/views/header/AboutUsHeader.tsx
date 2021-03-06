import React from 'react';

import useBreakpoints from '../../hooks/useBreakpoints';
import { AboutUsHeroData } from '../../data/about-us-data';

function AboutUsHeader() {
  const { breakpoint } =  useBreakpoints();
  const [image, setImage] = React.useState('');
  const [imageBG, setImageBG] = React.useState('');

  React.useEffect(() => {
    if (breakpoint === 'xxs') {
      setImage(AboutUsHeroData.image.mobile);
      setImageBG(AboutUsHeroData.imageBG.mobile);
    } else if (breakpoint === 'xs') {
      setImage(AboutUsHeroData.image.mobile);
      setImageBG(AboutUsHeroData.imageBG.mobile);
    } else if (breakpoint === 'sm') {
      setImage(AboutUsHeroData.image.mobile);
      setImageBG(AboutUsHeroData.imageBG.mobile);
    } else if (breakpoint === 'md') {
      setImage(AboutUsHeroData.image.tablet);
      setImageBG(AboutUsHeroData.imageBG.desktop);
    } else if (breakpoint === 'lg') {
      setImage(AboutUsHeroData.image.desktop);
      setImageBG(AboutUsHeroData.imageBG.desktop);
    } else if (breakpoint === 'xl') {
      setImage(AboutUsHeroData.image.desktop);
      setImageBG(AboutUsHeroData.imageBG.desktop);
    } else if (breakpoint === '2xl') {
      setImage(AboutUsHeroData.image.desktop);
      setImageBG(AboutUsHeroData.imageBG.desktop);
    } else {
      setImage(AboutUsHeroData.image.desktop);
      setImageBG(AboutUsHeroData.imageBG.desktop);
    }
  }, [breakpoint])

  return (
    <>
      {
        image &&
        <div
          className="bg-peach overflow-hidden flex flex-col bg-no-repeat bg-right md:bg-contain md:rounded-2xl md:-bg-left-86-top-48 lg:flex-row-reverse lg:bg-unset lg:bg-left-bottom"
          style={{
            backgroundImage: "url('"+ imageBG +"')"
          }}>
          <div className="relative h-80 w-full overflow-hidden bg-center bg-no-repeat bg-cover lg:h-120 lg:w-120"
            style={{
              backgroundImage: "url('"+ image +"')"
            }}>
          </div>

          <div className="px-6 py-20 flex flex-col space-y-6 md:px-14 md:py-16 md:space-y-8 lg:flex-1 lg:justify-center">
            <div className="text-center lg:text-left">
              <span className="text-h3 text-white font-medium lg:text-h1">
                { AboutUsHeroData.title }
              </span>
            </div>

            <div className="text-center lg:text-left">
              <span className="text-caption text-white md:text-base">
                { AboutUsHeroData.description }
              </span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default React.memo(AboutUsHeader);
