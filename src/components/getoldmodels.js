import React, { Component } from 'react';
import $ from 'jquery';

var rb = require('react-bootstrap');
var FormGroup = rb.FormGroup;
var FormControl = rb.FormControl;
var ControlLabel = rb.ControlLabel;
var HelpBlock = rb.HelpBlock;


function FieldGroup({id, label, help, ...props}) {
    return (
      <FormGroup controlID={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class OldModels extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={person_name:"Camilo Ernesto", models=[]}
  }


  handleSubmit() {
    var data = new FormData();
    data.append("person_name", this.state.person_name);
    $.ajax({
      method: "POST",
      url:"http://localhost:8080/api/djmodels/person/",
      data: data,
      cache: false,
      contentType:false,
      processData: false,
      crossDomain: true,
    }).done((data) => {
      console.log(data);
      this.props.ponerCodigo(data.model);
    }).fail((err) => {
      console.log("Errooooorrrrr", err);
    });
    // fetch("http://localhost:8080/api/djmodels", {
    //   mode:'no-cors',
    //   method:"POST",
    //   body: data
    // }).then(function (res) {
    //   if(res.ok) {
    //     alert("Perfect");
    //   } else {
    //     alert("Server error (status code:" + res.status);
    //   }
    // }, function(e) {
    //   alert("ERROR (details):" + e);
    //   throw e;
    // });
    // return false;
  };

  handleChange(e) {
    var change= {};
    change[e.target.name] = e.target.value
    this.setState(change);
  };





  render() {
    return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <FieldGroup
        id="nombre_persona"
        name="person_name"
        type="text"
        label="Tu nombre"
        placeholder="Camilo"
        value={this.state.person_name}
        onChange={this.handleChange}
      />
    </form>
    <button bsStyle= "primary" onClick={this.handleSubmit}>Enviar</button>
    <ul className="col-md-4 list-group">{models}</ul>
    </div>
    )
  }
}

export default OldModels
