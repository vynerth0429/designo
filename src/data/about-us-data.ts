export type TAboutUsImage = {
  mobile: string,
  tablet: string,
  desktop: string,
}

export type TAboutUsHeader = {
  title: string,
  description: string[],
  image: TAboutUsImage,
  imageBG: TAboutUsImage,
}

export const AboutUsHeroData: TAboutUsHeader = {
  title: 'About Us',
  description: ['Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'],
  image: {
    mobile: '/assets/about/mobile/image-about-hero.jpg',
    tablet: '/assets/about/tablet/image-about-hero.jpg',
    desktop: '/assets/about/desktop/image-about-hero.jpg',
  },
  imageBG: {
    mobile: '/assets/about/mobile/bg-pattern-hero-about-mobile.svg',
    tablet: '/assets/about/desktop/bg-pattern-hero-about-desktop.svg',
    desktop: '/assets/about/desktop/bg-pattern-hero-about-desktop.svg',
  }
}

export const AboutUsTalentData: TAboutUsHeader = {
  title: 'World-class talent',
  description: [
    'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
    'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
  ],
  image: {
    mobile: '/assets/about/mobile/image-world-class-talent.jpg',
    tablet: '/assets/about/tablet/image-world-class-talent.jpg',
    desktop: '/assets/about/desktop/image-world-class-talent.jpg',
  },
  imageBG: {
    mobile: '/assets/shared/desktop/bg-pattern-three-circles.svg',
    tablet: '/assets/shared/desktop/bg-pattern-three-circles.svg',
    desktop: '/assets/shared/desktop/bg-pattern-three-circles.svg',
  }
}

export const AboutUsRealDealData: TAboutUsHeader = {
  title: 'The real deal',
  description: [
    'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
    'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
  ],
  image: {
    mobile: '/assets/about/mobile/image-real-deal.jpg',
    tablet: '/assets/about/tablet/image-real-deal.jpg',
    desktop: '/assets/about/desktop/image-real-deal.jpg',
  },
  imageBG: {
    mobile: '/assets/shared/desktop/bg-pattern-three-circles.svg',
    tablet: '/assets/shared/desktop/bg-pattern-three-circles.svg',
    desktop: '/assets/shared/desktop/bg-pattern-three-circles.svg',
  }
}