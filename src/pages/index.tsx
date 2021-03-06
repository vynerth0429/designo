import React from "react";

import LandingHeader from "../views/header/LandingHeader";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center px-0 md:px-10 2xl:px-0">
        <div className="container">
          <LandingHeader />
        </div>
      </div>
    </div>
  )
}
