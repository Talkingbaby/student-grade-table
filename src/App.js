import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'; 
import Display from './components/Display';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Display />
      </Grid>
    );
  }
}
