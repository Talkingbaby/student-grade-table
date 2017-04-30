import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'; 
import PageHeader from './components/PageHeader';
import Form from './components/Form';
import Table from './components/Table';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader />
        <Form />
        <Table />
      </Grid>
    );
  }
}
