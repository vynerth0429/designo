export type TImage = {
  mobile: string,
  tablet: string,
  desktop: string,
}

export type TContact = {
  phone: string,
  email: string,
}

export type TAddress = {
  name: string,
  street: string,
  city: string,
}

export type TLocation = {
  name: string,
  address: TAddress,
  contact: TContact,
  imageMap: TImage,
  illustration: string,
  imageBG: string,
}

export const LocationListData: TLocation[] = [
  {
    name: 'Canada',
    address: {
      name: 'Designo Central Office',
      street: '3886 Wellington Street',
      city: 'Toronto, Ontario M9C 3J5',
    },
    contact: {
      phone: '+1 253-863-8967',
      email: 'contact@designo.co',
    },
    imageMap: {
      mobile: '/assets/locations/desktop/image-map-canada.png',
      tablet: '/assets/locations/tablet/image-map-canada.png',
      desktop: '/assets/locations/desktop/image-map-canada.png',
    },
    illustration: '/assets/shared/desktop/illustration-canada.svg',
    imageBG: '/assets/shared/desktop/bg-pattern-three-circles.svg',
  },
  {
    name: 'Australia',
    address: {
      name: 'Designo AU Office',
      street: '19 Balonne Street',
      city: 'New South Wales 2443',
    },
    contact: {
      phone: '(02) 6720 9092',
      email: 'contact@designo.au',
    },
    imageMap: {
      mobile: '/assets/locations/desktop/image-map-australia.png',
      tablet: '/assets/locations/tablet/image-map-australia.png',
      desktop: '/assets/locations/desktop/image-map-australia.png',
    },
    illustration: '/assets/shared/desktop/illustration-australia.svg',
    imageBG: '/assets/shared/desktop/bg-pattern-three-circles.svg',
  },
  {
    name: 'United Kingdom',
    address: {
      name: 'Designo UK Office',
      street: '13  Colorado Way',
      city: 'Rhyd-y-fro SA8 9GA',
    },
    contact: {
      phone: '078 3115 1400',
      email: 'contact@designo.uk',
    },
    imageMap: {
      mobile: '/assets/locations/desktop/image-map-united-kingdom.png',
      tablet: '/assets/locations/tablet/image-map-united-kingdom.png',
      desktop: '/assets/locations/desktop/image-map-united-kingdom.png',
    },
    illustration: '/assets/shared/desktop/illustration-united-kingdom.svg',
    imageBG: '/assets/shared/desktop/bg-pattern-three-circles.svg',
  },
];