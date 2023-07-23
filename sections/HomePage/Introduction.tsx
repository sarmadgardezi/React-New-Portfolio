import PortraitImage from '../../public/images/portrait.jpg';

import { styled, wavingAnimation } from '@config/stitches.config';

import { ContentWrapper } from '@components/Layout';
import { Picture } from '@components/Picture';
import { Card } from '@components/Card';

const StyledSection = styled('section', {
  backgroundColor: '$surface50',
  borderBottom: '2px solid $border',

  '> .content': {
    paddingTop: '4rem',
    paddingBottom: '2rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    columnGap: '4rem',

    '@md': { paddingTop: '6rem', paddingBottom: '3.5rem' },

    '.description': {
      '.title': { marginTop: '1rem', marginBottom: '1.5rem' },
      '.subtitle': { marginBottom: '1.5rem', fontWeight: '500' },
    },

    '.portrait': {
      display: 'none',

      '@md': { display: 'block', flexShrink: 0 },

      '&:hover': {
        cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>") 16 0, auto`,

        '[data-emoji] > span': {
          display: 'inline-block',
          animation: `${wavingAnimation} 2500ms`,
          transformOrigin: '70% 70%',
        },
      },
    },
  },

  '> .bookmarks': {
    paddingBottom: '6rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '1rem',

    '@md': { flexDirection: 'row', columnGap: '1rem' },

    '> div': { flex: 1 },
  },
});

export const IntroductionSection: React.FC = () => {
  return (
    <StyledSection id="introduction-section">
      <ContentWrapper className="content">
        <div className="description">
          <h3 className="title">Nice to have you here.</h3>
          <p className="subtitle">
          Greetings! I'm Sarmad, a highly skilled and dedicated freelance React Developer,      
          well-versed in the art of crafting exceptional web experiences. With 
          a keen focus on creating top-notch applications using React, I thrive on 
          turning ideas into reality with clean and efficient code.
          </p>
          <p>
          What sets me apart is my comprehensive expertise in Search Engine Optimization (SEO) 
          and WordPress, enabling me to create websites that not only excel in functionality but 
          also rank high in search engine results. By integrating SEO best practices and leveraging 
          the power of WordPress, I ensure that the websites I develop are not only aesthetically 
          pleasing but also optimized for enhanced visibility and performance.
          </p>
        </div>
        <Picture
          src={PortraitImage}
          alt="Sarmad Gardezi Portrait"
          placeholder="blur"
          height="22rem"
          width="20rem"
          emoji="👋"
          className="portrait"
        />
      </ContentWrapper>
      <ContentWrapper className="bookmarks">
        <Card
          background="secondary50"
          backgroundEmoji="secondary100"
          emoji="✍️"
          to="/blog"
        >
          <h5>Discover my blog.</h5>
          <p>
            Learn how to build digital products with React and other modern web
            development tools.
          </p>
        </Card>
        <Card
          background="secondary50"
          backgroundEmoji="secondary100"
          emoji="👨‍💻"
          to="/services"
        >
          <h5>Discover my services.</h5>
          <p>
            Looking for someone who takes over or supports development?
            Let&apos;s work together!
          </p>
        </Card>
      </ContentWrapper>
    </StyledSection>
  );
};
