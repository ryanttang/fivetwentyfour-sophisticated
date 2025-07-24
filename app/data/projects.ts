<<<<<<< HEAD
export default [
  { id: 1, title: 'Showcase Project 1', tags: ['e-commerce'], thumbnail: '/assets/images/project1.jpg', slug: 'showcase-project-1', heroImage: '/assets/images/project1-hero.jpg', sections: [
    { title: 'Overview', text: 'Project overview and goals.', image: '/assets/images/project1-section1.jpg' },
    { title: '3D Experience', text: 'Immersive 3D section.', webgl: { /* config */ } },
    { title: 'Results', text: 'Project results and impact.', image: '/assets/images/project1-section2.jpg' },
  ] },
  { id: 2, title: 'Showcase Project 2', tags: ['portfolio'], thumbnail: '/assets/images/project2.jpg', slug: 'showcase-project-2' },
  { id: 3, title: 'Showcase Project 3', tags: ['webgl'], thumbnail: '/assets/images/project3.jpg', slug: 'showcase-project-3' },
=======
export type Project = {
  id: number;
  title: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  heroImage?: string;
  sections?: Array<{
    title: string;
    text: string;
    image?: string;
    webgl?: object;
  }>;
};

export default [
  { id: 1, title: 'Showcase Project 1', tags: ['e-commerce'], thumbnail: '/images/work1.avif', slug: 'showcase-project-1', heroImage: '/images/work1.avif', sections: [
    { title: 'Overview', text: 'Project overview and goals.', image: '/images/work1.avif' },
    { title: '3D Experience', text: 'Immersive 3D section.', webgl: { /* config */ } },
    { title: 'Results', text: 'Project results and impact.', image: '/images/work1.avif' },
  ] },
  { id: 2, title: 'Showcase Project 2', tags: ['portfolio'], thumbnail: '/images/work2.avif', slug: 'showcase-project-2', heroImage: '/images/work2.avif', sections: [
    { title: 'Overview', text: 'Project overview and goals.', image: '/images/work2.avif' },
    { title: '3D Experience', text: 'Immersive 3D section.', webgl: { /* config */ } },
    { title: 'Results', text: 'Project results and impact.', image: '/images/work2.avif' },
  ] },
  { id: 3, title: 'Showcase Project 3', tags: ['webgl'], thumbnail: '/images/work3.avif', slug: 'showcase-project-3', heroImage: '/images/work3.avif', sections: [
    { title: 'Overview', text: 'Project overview and goals.', image: '/images/work3.avif' },
    { title: '3D Experience', text: 'Immersive 3D section.', webgl: { /* config */ } },
    { title: 'Results', text: 'Project results and impact.', image: '/images/work3.avif' },
  ] },
>>>>>>> a2f9504000a8f87f357a0ea97e4ba9b5e74426fc
] 