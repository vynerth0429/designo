export type TCoreValue = {
  id: string,
  title: string,
  subtitle: string,
  image: string
}

export const CoreValueListData: TCoreValue[] = [
  {
    id: "CV-1",
    title: 'Passionate',
    subtitle: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    image: '/assets/home/desktop/illustration-passionate.svg',
  },
  {
    id: "CV-2",
    title: 'Resourceful',
    subtitle: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    image: '/assets/home/desktop/illustration-resourceful.svg',
  },
  {
    id: "CV-3",
    title: 'Friendly',
    subtitle: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    image: '/assets/home/desktop/illustration-friendly.svg',
  },
]