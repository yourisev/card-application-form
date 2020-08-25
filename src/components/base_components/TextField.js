import React from 'react';
import FormGroup from "react-bootstrap/FormGroup";
import Form from 'react-bootstrap/Form';

export default class TextField extends React.Component {
    render() {
        return (
            <FormGroup controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control placeholder={this.props.placeholder}/>
            </FormGroup>
        );
    }
};