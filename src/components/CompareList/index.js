import React from 'react';

import { Container, Repository } from './styles';

const CompareList = () => (
  <Container>
    <Repository>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="Facebook" />
        <strong>react</strong>
        <small>Facebook</small>
      </header>

      <ul>
        <li>
          95.047
          {' '}
          <small>stars</small>
        </li>
      </ul>
    </Repository>
  </Container>
);

export default CompareList;