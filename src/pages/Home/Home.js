import React, { Component } from 'react';
import moment from 'moment';

import HomeServices from './homeServices';

import { Container, Form } from './styles';

import logo from '../../assets/compare-logo.png';

import CompareList from '../../components/CompareList/index';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    try {
      const { data: repository } = await HomeServices.addRepository(repositoryInput);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const { repositoryInput, repositories, repositoryError } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
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
