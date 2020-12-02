import React from 'react';

import Banner from '../../components/Banner';
import Row from '../../components/Row';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <div>
      <Banner />
      <Row type="playingnow" />
      <Row type="comingsoon" />
      <Footer />
    </div>
  );
}

export default HomePage;
