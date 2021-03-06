import React from 'react';
import Image from 'next/image';

import useBreakpoints from '../../hooks/useBreakpoints';
import { TProjectCategory } from '../../data/projects-data';

interface ComponentProps {
  category: TProjectCategory
}

function ProjectCategoryItem(props: ComponentProps) {
  const { breakpoint } =  useBreakpoints();
  const [imageBG, setImageBG] = React.useState('');

  React.useEffect(() => {
    if (breakpoint === 'xxs') {
      setImageBG(props.category.image.mobile);
    } else if (breakpoint === 'xs') {
      setImageBG(props.category.image.mobile);
    } else if (breakpoint === 'sm') {
      setImageBG(props.category.image.mobile);
    } else if (breakpoint === 'md') {
      setImageBG(props.category.image.tablet);
    } else if (breakpoint === 'lg') {
      setImageBG(props.category.image.desktop);
    } else if (breakpoint === 'xl') {
      setImageBG(props.category.image.desktop);
    } else if (breakpoint === '2xl') {
      setImageBG(props.category.image.desktop);
    } else {
      setImageBG(props.category.image.desktop);
    }
  }, [breakpoint])

  return (
    <div className="relative h-full group rounded-2xl bg-no-repeat bg-cover py-24 cursor-pointer md:py-14 lg:py-28"
      style={{
        backgroundImage: "url('"+ imageBG +"')"
      }}>
      <div className="relative h-full z-10 flex flex-col items-center justify-center transition transform group-hover:scale-110">
        <div className="text-center text-h4 text-white font-medium uppercase">
          { props.category.title }
        </div>
        <div className="mt-3 text-center flex items-center space-x-4">
          <span className="text-caption text-white font-medium">
            View projects
          </span>
          <span>
            <Image
              src="/assets/shared/desktop/icon-right-arrow.svg"
              width="4px"
              height="8px"/>
          </span>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-0 bottom-0 bg-grey-dark opacity-70 rounded-2xl animate-all group-hover:bg-peach"></div>
    </div>
  )
}

export default React.memo(ProjectCategoryItem);
