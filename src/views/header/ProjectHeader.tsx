import React from 'react';

import { TProjectCategory } from '../../data/projects-data';

interface ComponentProps {
  projectCategory: TProjectCategory,
}

function ProjectHeader(props: ComponentProps) {
  return (
    <div
      className="relative bg-peach py-28 px-6 overflow-hidden md:rounded-2xl bg-right-top bg-no-repeat space-y-6 md:bg-right"
      style={{
        backgroundImage: "url('"+ props.projectCategory.image.header +"')"
      }}>
      <div className="text-center">
        <span className="text-h3 text-white font-medium md:text-h1">
          { props.projectCategory.title }
        </span>
      </div>

      <div className="text-center">
        <span className="text-caption text-white md:text-base">
          { props.projectCategory.subtitle }
        </span>
      </div>
    </div>
  )
}

export default React.memo(ProjectHeader);
