import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import Footer from '.';

import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Footer', () => {
  afterEach(cleanup);

  it('Matches its snapshot', () => {
    console.log(Footer);
    const { container } = render(
      <Footer
        githubName="lux"
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
