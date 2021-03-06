import React from 'react';

import { TProjectCategory } from '../../data/projects-data';

import ProjectCategoryItem from './ProjectCategoryItem';

interface ComponentProps {
  categoryList: TProjectCategory[]
}

function ProjectCategoryList(props: ComponentProps) {
  return (
    <div>
      <div className="grid grid-cols-1 auto-rows-auto gap-6 lg:grid-cols-2">
        {
          props.categoryList.map((category, index) => (
            <div
              key={category.id}
              className={`col-start-1 col-end-2 ${index === 0 ? (props.categoryList.length === 3 ? 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3' : '') : (props.categoryList.length === 3 ? 'lg:col-start-2 lg:col-end-3' : 'col-start-auto col-end-auto')}`}>
              <ProjectCategoryItem category={category} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectCategoryList;
