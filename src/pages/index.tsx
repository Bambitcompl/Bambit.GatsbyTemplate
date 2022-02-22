import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'react', 'bootstrap']} />
    <div>
      Starter
    </div>
  </Layout>
);

export default IndexPage;
