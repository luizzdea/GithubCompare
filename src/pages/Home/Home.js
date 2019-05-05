import React, { Component } from 'react';

import HomeServices from './homeServices';

import { Container, Form } from './styles';

import logo from '../../assets/compare-logo.png';

import CompareList from '../../components/CompareList/index';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    try {
      const response = await HomeServices.addRepository(repositoryInput);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { repositoryInput, repositories } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Search</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
