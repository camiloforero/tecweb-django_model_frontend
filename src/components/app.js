import React, { Component } from 'react';
import SendModel from './sendmodel';
import OldModels from './oldmodels';

var Highlight = require('react-highlight');
var rb = require('react-bootstrap');
var Grid = rb.Grid;
var PageHeader = rb.PageHeader
var Col = rb.Col


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text:"Enviar", codigo:"wasd"}
  }


  render() {
    return (
      <Grid>
        <PageHeader>Welcome to the Django model generator</PageHeader>
        <Col xs={12} sm={4}>
          <SendModel text={this.state.text} codigo={this.state.codigo} ponerCodigo={(codigo) => {this.setState({codigo: codigo})}}/>
        </Col>
        <Col xs={12} sm={8}>
          <Highlight className='python'>
            {this.state.codigo}
          </Highlight>
        </Col>
        <Col xs={12} sm={8}>
            <OldModels ponerCodigo={(codigo=> {this.setState({codigo:codigo})}}/>
        </Col>
      </Grid>
    );
  }
}

export default App;
