import React from 'react';

import { TProject } from '../../data/projects-data';

import ProjectItem from './ProjectItem';

interface ComponentProps {
  projects: TProject[]
}

function ProjectList(props: ComponentProps) {
  return (
    <div>
      <div className="grid grid-cols-1 auto-rows-auto gap-10 lg:grid-cols-3 lg:gap-8">
        {
          props.projects.map((project) => (
            <div
              key={project.id}
              className={`col-start-1 col-end-2 lg:col-start-auto lg:col-end-auto`}>
              <ProjectItem project={project} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(ProjectList);
