const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Bhavesh, Nagpur"',
  },

  {
    input: 'self.interests',
    return: '["web dev", "Physics", "Cricket"]',
  },
  {
    input: 'self.education',
    return: '"B.Tech - SVPCET Nagpur"',
  },
  {
    input: 'self.skills',
    return:
      '[  "React", "Next.JS", "Chakra-UI", "Tailwind", "NodeJs", "git","JavaScript", "Python"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/bhavesh-mahajan-b4255922b/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/bhavesh149">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="mailto:mahajanbhaveshop2@gmail.com">Email</a>"]`,
  },
];

export default info;
