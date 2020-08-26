import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import * as Yup from "yup";
import {Formik} from "formik";


export default class Part2 extends React.Component {
    render() {
        const maxLength = (length)=>{
            return "The maximum length is " + length;
        }
        const titleOptions= ()=>{
            const titles = ['Mr','Miss','Mrs','Dr','Eng.','H.E','Messrs']
            return titles.map((title,index)=>(
               <option value={index+1} key={index}>{title}</option>
            ));
        }

        const identityOptions = ()=>{
            const identities=['Civil ID','Passport','Driver License','Employment ID','Residence Card',
            'Family Book','Social Security Number']

            return identities.map((identity,index)=>(
               <option value={index+1} key={index}>{identity}</option>
            ));
        }

        const maritalStatusOptions= ()=>{
            const statuses=['Single','Married','Divorced','Widower','Separated'];
            return statuses.map((status, index)=>(
                <option value={index+1}>{status}</option>
            ))

        }
        return (
            <Formik initialValues={{
                customerTitle: '',
                customerFName: '',
                customerMName: '',
                customerLName: '',
                customerBDate: '',
                customerBLocation: '',
                firstIdentityType: '',
                firstIdentity: '',
                secondIdentityType: '',
                secondIdentity: '',
                firstGender:true, //true if male,false if female
                customerMaritalStatus:'',
                customerNationality:'This must be talked about',
                numberOfDependents:'',
                customerPositionOrTitle:'',

            }}
                    onSubmit={console.log}
                    validationSchema={Yup.object({
                        customerTitle: Yup.string().required('Required'),
                        customerFName: Yup.string().required('Required').max(40,maxLength(40)) ,
                        customerMName: Yup.string().required('Required').max(40,maxLength(40)),
                        customerLName: Yup.string().required('Required').max(40,maxLength(40)),
                        customerBDate: Yup.date().required('Required'),
                        customerBLocation: Yup.string().max(24,maxLength(24)),
                        firstIdentityType: Yup.string().required('Required'),
                        firstIdentity: Yup.string().max(20,maxLength(20,maxLength(20))),
                        secondIdentityType: Yup.string(),
                        secondIdentity: Yup.string().max(20,maxLength(20)),
                        firstGender:Yup.string(),
                        customerMaritalStatus:Yup.string(),
                        customerNationality:Yup.string(),
                        numberOfDependents:Yup.string().test("Digits only","The field should be an integer and should be less than 100",(value)=>/^\d{1,2}$/.test(value)),
                        customerPositionOrTitle:Yup.string(),
                    })}>
                {formik => (
                        <fieldset>
                            <legend>Customer Info</legend>
                            <Form.Row>
                                <Col><FormGroup controlId="customerTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control as="select" custom {...formik.getFieldProps('customerTitle')}>
                                        {titleOptions()}
                                    </Form.Control>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="customerFName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="Enter First Name" {...formik.getFieldProps('customerFName')}
                                                  isInvalid={formik.errors.customerFName && formik.touched.customerFName}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.customerFName}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col><FormGroup controlId="customerMName">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control placeholder="Enter Middle Name" {...formik.getFieldProps('customerMName')}
                                                  isInvalid={formik.errors.customerMName && formik.touched.customerMName}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.customerMName}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="customerLName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Enter Last Name" {...formik.getFieldProps('customerLName')}
                                                  isInvalid={formik.errors.customerLName && formik.touched.customerLName}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.customerLName}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col><FormGroup controlId="customerBDate">
                                    <Form.Label>Birth Date</Form.Label>
                                    <Form.Control type = "date" placeholder="Enter Birth Date" {...formik.getFieldProps('customerBDate')}
                                                  isInvalid={formik.errors.customerBDate && formik.touched.customerBDate}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.customerBDate}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="customerBLocation">
                                    <Form.Label>Birth Location</Form.Label>
                                    <Form.Control placeholder="Enter Birth Location" {...formik.getFieldProps('customerBLocation')}
                                                  isInvalid={formik.errors.customerBLocation && formik.touched.customerBLocation}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.customerBLocation}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col><FormGroup controlId="firstIdentityType">
                                    <Form.Label>First Identity Type</Form.Label>
                                    <Form.Control as="select" custom {...formik.getFieldProps('firstIdentityType')}>
                                        {identityOptions()}
                                    </Form.Control>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="firstIdentity">
                                    <Form.Label>First Identity</Form.Label>
                                    <Form.Control placeholder="Enter First Identity" {...formik.getFieldProps('firstIdentity')}
                                                  isInvalid={formik.errors.firstIdentity && formik.touched.firstIdentity}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.firstIdentity}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col><FormGroup controlId="secondIdentityType">
                                    <Form.Label>Second Identity Type</Form.Label>
                                    <Form.Control as="select" custom {...formik.getFieldProps('secondIdentityType')}>
                                        <option>NONE</option>
                                        {identityOptions()}
                                    </Form.Control>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="secondIdentity">
                                    <Form.Label>Second Identity</Form.Label>
                                    <Form.Control placeholder="Enter Second Identity" {...formik.getFieldProps('secondIdentity')}
                                                  isInvalid={formik.errors.secondIdentity && formik.touched.secondIdentity}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.secondIdentity}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col><FormGroup controlId="firstGender">
                                    <Form.Label>First Gender</Form.Label>
                                    <Form.Check
                                        type='radio'
                                        name='firstGender'
                                        label='Male'
                                        defaultChecked
                                        {...formik.getFieldProps('firstGender')}/>
                                    <Form.Check inline
                                                type='radio'
                                                name='firstGender'
                                                label='female'/>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="customerMaritalStatus">
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control as="select" custom {...formik.getFieldProps('customerMaritalStatus')}>
                                        <option>NONE</option>
                                        {maritalStatusOptions()}
                                    </Form.Control>
                                </FormGroup></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col><FormGroup controlId="customerNationality">
                                    <Form.Label>Nationality</Form.Label>
                                    <Form.Control placeholder="Enter Nationality" {...formik.getFieldProps('customerNationality')}
                                                  isInvalid={formik.errors.customerNationality && formik.touched.customerNationality}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.customerNationality}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                                <Col><FormGroup controlId="numberOfDependents">
                                    <Form.Label>Number of Dependents</Form.Label>
                                    <Form.Control placeholder="Enter Number of Dependents" {...formik.getFieldProps('numberOfDependents')}
                                                  isInvalid={formik.errors.numberOfDependents && formik.touched.numberOfDependents}/>
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.numberOfDependents}
                                    </Form.Control.Feedback>
                                </FormGroup></Col>
                            </Form.Row><Form.Row>
                            <Col xs={4}><FormGroup controlId="customerPositionOrTitle">
                                <Form.Label>Position or Title</Form.Label>
                                <Form.Control as="select" custom {...formik.getFieldProps('customerPositionOrTitle')}>
                                    <option value='0'>NONE</option>
                                    {titleOptions()}
                                </Form.Control>
                            </FormGroup></Col>
                        </Form.Row>
                        </fieldset>

                )
                }

            </Formik>

        );
    }
};