import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';

function CheckResult() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default CheckResult;
