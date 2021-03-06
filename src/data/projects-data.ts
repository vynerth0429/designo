export type TCategoryImage = {
  mobile: string,
  tablet: string,
  desktop: string,
  header: string,
}

export type TProjectCategory = {
  id: string,
  title: string,
  subtitle: string,
  image: TCategoryImage
}

export type TProject = {
  id: number,
  imageSrc: string,
  title: string,
  description: string,
  categoryId: string,
}


export const ProjectCategoryListData: TProjectCategory[] = [
  {
    id: "WD-1",
    title: 'Web Design',
    subtitle: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    image: {
      mobile: '/assets/home/mobile/image-web-design.jpg',
      tablet: '/assets/home/tablet/image-web-design.jpg',
      desktop: '/assets/home/desktop/image-web-design.jpg',
      header: '/assets/web-design/desktop/bg-pattern-intro-web.svg',
    },
  },
  {
    id: "AD-1",
    title: 'App Design',
    subtitle: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    image: {
      mobile: '/assets/home/mobile/image-app-design.jpg',
      tablet: '/assets/home/tablet/image-app-design.jpg',
      desktop: '/assets/home/desktop/image-app-design.jpg',
      header: '/assets/app-design/desktop/bg-pattern-intro-app.svg',
    },
  },
  {
    id: "GD-1",
    title: 'Graphic Design',
    subtitle: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    image: {
      mobile: '/assets/home/mobile/image-graphic-design.jpg',
      tablet: '/assets/home/tablet/image-graphic-design.jpg',
      desktop: '/assets/home/desktop/image-graphic-design.jpg',
      header: '/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg',
    },
  }
];

export const ProjectListData: TProject[] = [
  {
    id: 1,
    imageSrc: '/assets/web-design/desktop/image-express.jpg',
    title: 'Express',
    description: 'A multi-carrier shipping website for ecommerce businesses',
    categoryId: 'WD-1',
  },
  {
    id: 2,
    imageSrc: '/assets/web-design/desktop/image-transfer.jpg',
    title: 'Transfer',
    description: 'Site for low-cost money transfers and sending money within seconds',
    categoryId: 'WD-1',
  },
  {
    id: 3,
    imageSrc: '/assets/web-design/desktop/image-photon.jpg',
    title: 'Photon',
    description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
    categoryId: 'WD-1',
  },
  {
    id: 4,
    imageSrc: '/assets/web-design/desktop/image-builder.jpg',
    title: 'Builder',
    description: 'Connects users with local contractors based on their location',
    categoryId: 'WD-1',
  },
  {
    id: 5,
    imageSrc: '/assets/web-design/desktop/image-blogr.jpg',
    title: 'Blogr',
    description: 'Blogr is a platform for creating an online blog or publication',
    categoryId: 'WD-1',
  },
  {
    id: 6,
    imageSrc: '/assets/web-design/desktop/image-camp.jpg',
    title: 'Camp',
    description: 'Get expert training in coding, data, design, and digital marketing',
    categoryId: 'WD-1',
  },
  {
    id: 11,
    imageSrc: '/assets/app-design/desktop/image-airfilter.jpg',
    title: 'Airfilter',
    description: 'Solving the problem of poor indoor air quality by filtering the air',
    categoryId: 'AD-1',
  },
  {
    id: 12,
    imageSrc: '/assets/app-design/desktop/image-eyecam.jpg',
    title: 'Eyecam',
    description: 'Product that lets you edit your favorite photos and videos at any time',
    categoryId: 'AD-1',
  },
  {
    id: 13,
    imageSrc: '/assets/app-design/desktop/image-faceit.jpg',
    title: 'Faceit',
    description: 'Get to meet your favorite internet superstar with the faceit app',
    categoryId: 'AD-1',
  },
  {
    id: 14,
    imageSrc: '/assets/app-design/desktop/image-todo.jpg',
    title: 'Todo',
    description: 'A todo app that features cloud sync with light and dark mode',
    categoryId: 'AD-1',
  },
  {
    id: 15,
    imageSrc: '/assets/app-design/desktop/image-loopstudios.jpg',
    title: 'Loopstudios',
    description: 'A VR experience app made for Loopstudios',
    categoryId: 'AD-1',
  },
  {
    id: 21,
    imageSrc: '/assets/graphic-design/desktop/image-change.jpg',
    title: 'Tim Brown',
    description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
    categoryId: 'GD-1',
  },
  {
    id: 22,
    imageSrc: '/assets/graphic-design/desktop/image-boxed-water.jpg',
    title: 'Boxed Water',
    description: 'A simple packaging concept made for Boxed Water',
    categoryId: 'GD-1',
  },
  {
    id: 23,
    imageSrc: '/assets/graphic-design/desktop/image-science.jpg',
    title: 'Science!',
    description: 'A poster made in collaboration with the Federal Art Project',
    categoryId: 'GD-1',
  },
]