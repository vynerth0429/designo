import React from 'react';
import Image from 'next/image';

import { TProject } from '../../data/projects-data';

interface ComponentProps {
  project: TProject
}

function ProjectItem(props: ComponentProps) {
  return (
    <div className="h-full flex flex-col group overflow-hidden cursor-pointer rounded-2xl sm:flex-row lg:flex-col">
      <div className="relative h-80 rounded-tl-2xl rounded-tr-2xl sm:flex-1 lg:flex-none">
        <Image
          src={props.project.imageSrc}
          quality={100}
          layout="fill"
          className="transition transform duration-500 group-hover:scale-110"/>
      </div>

      <div className="bg-peach-lighter flex flex-col flex-1 items-center justify-center py-8 px-7 space-y-4 duration-500 transition-all group-hover:bg-peach sm:px-8 lg:justify-start">
        <div className="text-center">
          <span className="uppercase text-h5 text-peach font-medium duration-500 transition-all group-hover:text-white">
            { props.project.title }
          </span>
        </div>

        <div className="text-center">
          <span className="text-grey-dark duration-500 transition-all group-hover:text-white">
            { props.project.description }
          </span>
        </div>
      </div>

    </div>
  )
}

export default React.memo(ProjectItem);
