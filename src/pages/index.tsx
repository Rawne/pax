import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Video from '../components/video/video';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Video />
  </Layout>
)

export default IndexPage
