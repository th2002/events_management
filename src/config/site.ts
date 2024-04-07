export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Events Management',
  description: 'Pick up your wonderful plans',
  navItems: [
    {
      label: 'Explore',
      href: '/'
    },
    {
      label: 'Upcoming Events',
      href: '/upcoming-events'
    },
    {
      label: 'My tickets',
      href: '/my-tickets'
    }
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile'
    },
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Log in',
      href: '/login'
    },
    {
      label: 'Sign up',
      href: '/sign-up'
    },
    {
      label: 'Logout',
      href: '/logout'
    }
  ],
  links: {
    distributor: ''
  }
};
