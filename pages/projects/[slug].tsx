import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';

import { getAllProjects, getProject } from '@lib/mdx/projects';

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
    <div>
      <h1>{frontmatter.name}</h1>
      <img src={frontmatter.images?.[0]?.src} alt="Project Image" /> {/* Render the src property from images */}
      <MDXBody />
    </div>
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
