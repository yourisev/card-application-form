import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import './top.css';

export default class Part1 extends React.Component {

    render() {
        const {formik} = this.props;
        const parentRelationOptions = () => {
            const relations = ['Son', 'GrandSon', 'Daughter', 'GrandDaughter', 'Father', 'StepFather',
                'Mother', 'StepMother', 'GrandFather', 'GrandMother', 'Sister', 'Brother', 'Wife']
            return relations.map((relation, key) => (
                <option value={key + 1} key={key}>{relation}</option>
            ));

        }
        return (
            <div>
                <legend className={'legend'}>
                    <u>
                        Application for Prepaid Card
                    </u>
                    <br/><br/>
                </legend>
                <legend>Card Info</legend>
                <Form.Row>
                <Col xs={3}><FormGroup controlId="applicationId">
                    <Form.Label>Application ID</Form.Label>
                    <Form.Control
                        placeholder="Enter Application ID" {...formik.getFieldProps('applicationId')}
                        isInvalid={formik.errors.applicationId && formik.touched.applicationId}/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.applicationId}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                <Col xs={3}><FormGroup controlId="applicationDate">
                    <Form.Label>Application Date</Form.Label>
                    <Form.Control placeholder="Enter Application Date" {...formik.getFieldProps('applicationDate')}
                                  isInvalid={formik.errors.applicationDate && formik.touched.applicationDate}
                                  type='date'/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.applicationDate}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="branchId">
                        <Form.Label>Branch Id</Form.Label>
                        <Form.Control placeholder="Enter Branch Id" {...formik.getFieldProps('branchId')}
                                      isInvalid={formik.errors.branchId && formik.touched.branchId}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.branchId}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
            </Form.Row>

                <Form.Row>
                    <Col xs={3}><FormGroup controlId="customerType">
                        <Form.Label>Customer Type</Form.Label>
                        <Form.Row>
                            <Col xs={3}>
                                <Form.Check
                                    type='radio'
                                    name='customerType'
                                    label='O'
                                    defaultChecked
                                    {...formik.getFieldProps('customerType')}/>
                            </Col>

                           <Col>
                               <Form.Check type='radio'
                                           name='customerType'
                                           label='N'/>
                           </Col>
                        </Form.Row>

                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerId">
                        <Form.Label>Customer ID</Form.Label>
                        <Form.Control placeholder="Enter Customer ID" {...formik.getFieldProps('customerId')}
                                      isInvalid={formik.errors.customerId && formik.touched.customerId}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.customerId}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="parentCustomer">
                    <Form.Label>Parent Customer</Form.Label>
                    <Form.Control placeholder="Enter Parent Customer" {...formik.getFieldProps('parentCustomer')}
                                  isInvalid={formik.errors.parentCustomer && formik.touched.parentCustomer}/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.parentCustomer}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3}><FormGroup controlId="CustomerParentRelation">
                        <Form.Label>Customer Parent Relation</Form.Label>
                        <Form.Control as="select" custom {...formik.getFieldProps('CustomerParentRelation')}>
                            <option>NONE</option>
                            {parentRelationOptions()}
                        </Form.Control>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="promoter">
                    <Form.Label>Promoter</Form.Label>
                    <Form.Control placeholder="Enter Promoter" {...formik.getFieldProps('promoter')}
                                  isInvalid={formik.errors.promoter && formik.touched.promoter}/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.promoter}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                </Form.Row>
                <br/></div>

        );
    }
}