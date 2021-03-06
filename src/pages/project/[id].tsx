import React from 'react';
import { useRouter } from 'next/router';

import {
  TProject,
  TProjectCategory,
  ProjectListData,
  ProjectCategoryListData,
} from '../../data/projects-data';

import ProjectHeader from '../../views/header/ProjectHeader';
import ProjectList from '../../views/project/ProjectList';

function ProjecPage() {
  const router = useRouter();

  const [projects, setProjects] = React.useState<TProject[]>([]);
  const [category, setCategory] = React.useState<TProjectCategory>(null);

  const backToLanding = () => {
    router.push('/');
  };

  const getProjects = (id: string) => {
    const projectList = ProjectListData.filter((projectItem) => {
      return projectItem.categoryId === id;
    });

    setProjects(projectList);
  }

  const getCategory = (id: string) => {
    const categoryFindValue = ProjectCategoryListData.find((categoryItem) => {
      return categoryItem.id === id;
    });

    if (categoryFindValue) {
      getProjects(id);
      setCategory(categoryFindValue);
    } else {
      backToLanding();
    }
  }

  React.useEffect(() => {
    if (router.query?.id) {
      getCategory(router.query?.id as string);
    }
  }, [router.query]);

  return (
    <>
      <div className="md:mt-8 flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container space-y-40">
          {
            category &&
            <ProjectHeader projectCategory={category}/>
          }
        </div>
      </div>

      <div className="mt-24 md:mt-40 flex flex-col items-center px-6 md:px-10 2xl:px-0">
        <div className="container">
          <ProjectList projects={projects} />
        </div>
      </div>
    </>
  )
}

export default ProjecPage;
