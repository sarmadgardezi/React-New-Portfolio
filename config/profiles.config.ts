import type { SvgProps } from '@components/Icon';
import { MediumSvg } from '@components/Icon/Medium';
import { LinkedInSvg } from '@components/Icon/LinkedIn';
import { GithubSvg } from '@components/Icon/Github';
import { TwitterSvg } from '@components/Icon/Twitter';

export type Profile = {
  to: string;
  label: string;
  icon?: React.FC<SvgProps>;
};

export const TwitterHandle = '@kmuenster';

export const socialProfiles: Profile[] = [
  {
    to: 'https://www.linkedin.com/in/sarmadgardezi',
    label: 'LinkedIn',
    icon: LinkedInSvg,
  },
  {
    to: 'https://github.com/sarmadgardezi/',
    label: 'Github',
    icon: GithubSvg,
  },
  {
    to: 'https://twitter.com/@sarmadgardezi',
    label: 'Twitter',
    icon: TwitterSvg,
  },
  {
    to: 'https://medium.com/@sarmadgardezi',
    label: 'Medium',
    icon: MediumSvg,
  },
  {
    to: 'mailto:mail@ksarmadgardezi.com',
    label: 'Email',
  },
];
