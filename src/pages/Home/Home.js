import React from 'react';

import { Container, Form } from './styles';

import logo from '../../assets/compare-logo.png';

import CompareList from '../../components/CompareList/index';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">Search</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
