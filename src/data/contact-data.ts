export type TImage = {
  mobile: string,
  tablet: string,
  desktop: string,
}

export type TContact = {
  title: string,
  description: string,
  imageBG: TImage,
}

export const ContactData: TContact = {
  title: 'Contact Us',
  description: 'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
  imageBG: {
    mobile: '/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg',
    tablet: '/assets/contact/desktop/bg-pattern-hero-desktop.svg',
    desktop: '/assets/contact/desktop/bg-pattern-hero-desktop.svg',
  }
}