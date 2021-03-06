import React from "react";

import { ProjectCategoryListData } from "../data/projects-data";

import LandingHeader from "../views/header/LandingHeader";
import ProjectCategoryList from "../views/project/ProjectCategoryList";

export default function Home() {
  return (
    <div className="space-y-32 space-y-40">
      <div className="flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container space-y-40">
          <LandingHeader />
        </div>
      </div>
      <div className="flex flex-col items-center px-6 md:px-10 2xl:px-0">
        <div className="container">
          <ProjectCategoryList categoryList={ProjectCategoryListData} />
        </div>
      </div>
    </div>
  )
}
