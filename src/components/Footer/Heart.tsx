import * as React from 'react';
import styled from 'react-emotion';

const Hello = styled('span')`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

/**
 * Heart.
 */
export default function Heart({}) {
  return <Hello>♥</Hello>;
}
