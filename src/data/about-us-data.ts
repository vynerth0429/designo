export type TAboutUsImage = {
  mobile: string,
  tablet: string,
  desktop: string,
}

export type TAboutUsHeader = {
  title: string,
  description: string,
  image: TAboutUsImage,
  imageBG: TAboutUsImage,
}

export const AboutUsHeroData: TAboutUsHeader = {
  title: 'About Us',
  description: 'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
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