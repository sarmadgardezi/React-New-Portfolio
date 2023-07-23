export type NavigationItem = {
  to: string;
  label: string;
};

export const headerNavigation: NavigationItem[] = [
  {
    to: '/',
    label: 'Home',
  },
     {
   to: '/about',
     label: 'About',
   },
  {
    to: '/services',
    label: 'Services',
  },
  {
    to: '/blog',
    label: 'Blog',
  },
 
];

export const footerNavigation: NavigationItem[] = [
  {
    to: '/transparency',
    label: 'Transparency',
  },
  {
    to: '/imprint',
    label: 'Imprint',
  },
];
