import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import {Formik} from 'formik';
import * as Yup from 'yup';

export default class Part1 extends React.Component {

    render() {
        const maxLength = (length)=>{
            return "The maximum length is " + length;
        }
        const parentRelationOptions = () =>{
            const relations = ['Son','GrandSon','Daughter','GrandDaughter','Father','StepFather',
            'Mother','StepMother','GrandFather','GrandMother','Sister','Brother','Wife']
            return relations.map((relation,key)=>(
                <option value={key+1} key={key}>{relation}</option>
            ));

        }
        return (
                <Formik initialValues={{
                    applicationId: '',
                    applicationDate: '',
                    bankId: '',
                    branchId: '',
                    customerType: true, //if true then O is selected else N is selected
                    customerId: '',
                    parentCustomer: '',
                    CustomerParentRelation: '',
                    promoter: '',

                }}
                        onSubmit={console.log}
                        validationSchema={Yup.object({
                            applicationId: Yup.string().required('Required').max(20,"The maximum is length 20"),
                            applicationDate: Yup.date().required('Required'),
                            bankId: Yup.string().required('Required').max(20,maxLength(20)),
                            branchId: Yup.string().required('Required').max(20,maxLength(20)),
                            customerId: Yup.string().required('Required').max(24,maxLength(24)),
                            parentCustomer: Yup.string().max(24,maxLength(24)),
                            CustomerParentRelation: Yup.string(),
                            promoter: Yup.string().max(20,maxLength(20,maxLength(20)))
                        })}>
                    {formik => (
                            <div><Form.Row>
                                <Col><FormGroup controlId="applicationId">
                                    <Form.Label>Application ID</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Application ID" {...formik.getFieldProps('applicationId')}
                                        isInvalid={formik.errors.applicationId && formik.touched.applicationId}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.applicationId}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="applicationDate">
                                    <Form.Label>Application Date</Form.Label>
                                    <Form.Control placeholder="Enter Application Date" {...formik.getFieldProps('applicationDate')}
                                                  isInvalid={formik.errors.applicationDate && formik.touched.applicationDate} type='date'/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.applicationDate}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row>
                                <Form.Row>
                                    <Col><FormGroup controlId="bankId">
                                        <Form.Label>Bank ID</Form.Label>
                                        <Form.Control placeholder="Enter Bank ID" {...formik.getFieldProps('bankId')}
                                                      isInvalid={formik.errors.bankId && formik.touched.bankId}/>
                                        <Form.Control.Feedback type='invalid'>
                                            {formik.errors.bankId}
                                        </Form.Control.Feedback>
                                    </FormGroup></Col>
                                    <Col><FormGroup controlId="branchId">
                                        <Form.Label>Branch Id</Form.Label>
                                        <Form.Control placeholder="Enter Branch Id" {...formik.getFieldProps('branchId')}
                                                      isInvalid={formik.errors.branchId && formik.touched.branchId}/>
                                        <Form.Control.Feedback type='invalid'>
                                            {formik.errors.branchId}
                                        </Form.Control.Feedback>
                                    </FormGroup></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col><FormGroup controlId="customerType">
                                        <Form.Label>Customer Type</Form.Label>
                                        <Form.Check
                                            type='radio'
                                            name='customerType'
                                            label='O'
                                        defaultChecked
                                            {...formik.getFieldProps('customerType')}/>
                                        <Form.Check inline
                                            type='radio'
                                            name='customerType'
                                            label='N'/>

                                    </FormGroup></Col>
                                    <Col><FormGroup controlId="customerId">
                                        <Form.Label>Customer ID</Form.Label>
                                        <Form.Control placeholder="Enter Customer ID" {...formik.getFieldProps('customerId')}
                                                      isInvalid={formik.errors.customerId && formik.touched.customerId}/>
                                        <Form.Control.Feedback type='invalid'>
                                            {formik.errors.customerId}
                                        </Form.Control.Feedback>
                                    </FormGroup></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col><FormGroup controlId="parentCustomer">
                                        <Form.Label>Parent Customer</Form.Label>
                                        <Form.Control placeholder="Enter Parent Customer" {...formik.getFieldProps('parentCustomer')}
                                                      isInvalid={formik.errors.parentCustomer && formik.touched.parentCustomer}/>
                                        <Form.Control.Feedback type='invalid'>
                                            {formik.errors.parentCustomer}
                                        </Form.Control.Feedback>
                                    </FormGroup></Col>
                                    <Col><FormGroup controlId="CustomerParentRelation">
                                        <Form.Label>Customer Parent Relation</Form.Label>
                                        <Form.Control as="select" custom {...formik.getFieldProps('CustomerParentRelation')}>
                                            <option>NONE</option>
                                            {parentRelationOptions()}
                                        </Form.Control>
                                    </FormGroup></Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col xs={5}><FormGroup controlId="promoter">
                                        <Form.Label>Promoter</Form.Label>
                                        <Form.Control placeholder="Enter Promoter" {...formik.getFieldProps('promoter')}
                                                      isInvalid={formik.errors.promoter && formik.touched.promoter}/>
                                        <Form.Control.Feedback type='invalid'>
                                            {formik.errors.promoter}
                                        </Form.Control.Feedback>
                                    </FormGroup></Col>
                                </Form.Row>
                                <br/></div>
                        )
                    }

                </Formik>
        );
    }
}