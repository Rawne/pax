import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Video from '../components/video/video';
import Navigation from '../components/navigation/navigation';

const IndexPage = () => (
  <Layout>
    <Navigation />
    <SEO title="Home" />
    <Video />
  </Layout>
)

export default IndexPage
