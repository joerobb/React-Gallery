import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
class App extends Component {
render() {
  return (
    <div>
    <Jumbotron>
    <Container>
      <h1>Search App</h1>
      <p>
        This is a simple search app.
      </p>
        <SearchForm />
      </Container>
    </Jumbotron>
    <Results />
    </div>
  );
 }
}

export default App;
