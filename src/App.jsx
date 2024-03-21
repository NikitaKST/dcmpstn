import React from 'react';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import SearchSection from './components/SearchSection';
import FeaturedContent from './components/FeaturedContent';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainContent />
        <SearchSection />
        <FeaturedContent />
      </Layout>
    </div>
  );
}

export default App;