import * as React from 'react';
import { render } from 'react-dom';
import Footer from '../components/Footer';

function App() {
  return (
    <Footer
      githubName={'lux'}
      developers={['Nathan Smith']}
      copyrightYear={2018}
    />
  );
}

render(<App />, document.getElementById('app'));
