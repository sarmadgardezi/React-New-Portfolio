import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';

import { getAllProjects, getProject } from '@lib/mdx/projects';
import { Flex
,Stack,
Heading,
Text,
Container,

} from '@chakra-ui/react';

export type EnrichedProjectMatter = Omit<ProjectMatter, 'images'> & {
  images: { src: string; placeholder: string; height: number; width: number }[];
  slug: string;
  path: string;
};

export type ProjectMatter = {
  name: string;
  website?: string;
  role?: string;
  period?: string;
  category?: string;
  emoji?: string;
  images?: string[];
  summary?: string;
  domain?: string[];
  published?: boolean;
};

export type ProjectProps = {
  code: string;
  frontmatter: EnrichedProjectMatter;
};

const Project: FC<ProjectProps> = ({ code, frontmatter }) => {
  const MDXBody = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
     <Container maxW='2sm' paddingTop='120' maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Meeting scheduling{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3sm'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
        <img src={frontmatter.images?.[0]?.src} width={200} alt="Project Image" /> {/* Render the src property from images */}
        </Flex>
        <Flex w={'full'}>
        <MDXBody />
        </Flex>
      </Stack>
    </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  if (!slug || Array.isArray(slug)) return { props: {} }; // Return an empty object if slug is invalid
  const project = await getProject(slug);
  return { props: { code: project?.code || '', frontmatter: project?.frontmatter || {} } };
};

export const getStaticPaths = async () => {
  const projects = await getAllProjects();
  const paths = projects.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Project;
