import * as React from 'react';
import { render } from 'react-dom';

import Headline from '../../components/Headline';
import Byline from '../../components/Byline';
import Footer from '../../components/Footer';

function App() {
  return (
    <>
      <Headline>The Headline</Headline>
      <Byline authors={['Nathan Smith']} />
      <Footer
        githubName={'lux'}
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    </>
  );
}

render(<App />, document.getElementById('app'));
