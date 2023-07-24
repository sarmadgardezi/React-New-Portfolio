import type { GetStaticProps, NextPage } from 'next';
import { SocialProfileJsonLd, SocialProfileJsonLdProps } from 'next-seo';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { getAllProjects } from '@lib/mdx/projects';
import { HeroSection } from '@sections/HomePage/Hero';
import { IntroductionSection } from '@sections/HomePage/Introduction';
import { LatestPostsSection } from '@sections/HomePage/LatestPosts';
import { ContactCard } from '@components/Card';
import { byNewestDate } from '@utils/sort';
import { getBaseUrl } from '@utils/getBaseUrl';
import { socialProfiles } from '@config/profiles.config';
import { LogoJsonLd } from 'next-seo';

import type { EnrichedBlogPostMatter } from './blog/[slug]';


const baseUrl = getBaseUrl();

const jsonLdProps: SocialProfileJsonLdProps = {
  name: 'Sarmad Gardezi',
  type: 'Person',
  url: baseUrl,
  sameAs: socialProfiles
    .filter(({ to }) => !to.includes(baseUrl) && !to.includes('mailto:'))
    .map(({ to }) => to),
};

type HomePageProps = {
  posts: EnrichedBlogPostMatter[];
};

const HomePage: NextPage<HomePageProps> = props => {

  return (
    <>
    <LogoJsonLd
      logo="http://sarmadgardezi/images/logo.jpg"
      url="http://sarmadgardezi.com"
    />
 <SocialProfileJsonLd
      type="Person"
      name="Sarmad Gardezi"
      url="http://sarmadgardezi.com"
      sameAs={[
        'http://www.facebook.com/sarmadgardezi',
        'http://instagram.com/sarmadgardezi',
        'http://twitter.com/sarmadgardezi',
        'http://www.linkedin.com/in/sarmadgardezi',
        'http://youtube.com/c/sarmadgardezi',
      ]}
    />
      <SocialProfileJsonLd {...jsonLdProps} />
      <HeroSection />
      <IntroductionSection />
      <LatestPostsSection posts={props.posts} />
     
      <ContactCard />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: (await getAllBlogPosts()).sort(byNewestDate),
      projects: await getAllProjects(),
    },
  };
};
