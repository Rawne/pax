import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Video from '../components/video/video';
import Background from '../components/background/background';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <Video />
    </Background>
  </Layout>
)

export default IndexPage
