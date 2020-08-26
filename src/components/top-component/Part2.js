import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";


export default class Part2 extends React.Component {
    render() {
        const {formik} = this.props;

        const titleOptions = () => {
            const titles = ['Mr', 'Miss', 'Mrs', 'Dr', 'Eng.', 'H.E', 'Messrs']
            return titles.map((title, index) => (
                <option value={index + 1} key={index}>{title}</option>
            ));
        }

        const identityOptions = () => {
            const identities = ['Civil ID', 'Passport', 'Driver License', 'Employment ID', 'Residence Card',
                'Family Book', 'Social Security Number']

            return identities.map((identity, index) => (
                <option value={index + 1} key={index}>{identity}</option>
            ));
        }

        const maritalStatusOptions = () => {
            const statuses = ['Single', 'Married', 'Divorced', 'Widower', 'Separated'];
            return statuses.map((status, index) => (
                <option value={index + 1} key={index}>{status}</option>
            ))

        }
        return (
            <fieldset>
                <legend>Customer Personal Info</legend>
                <Form.Row>
                    <Col xs={3}><FormGroup controlId="customerTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="select" custom {...formik.getFieldProps('customerTitle')}>
                            {titleOptions()}
                        </Form.Control>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter First Name" {...formik.getFieldProps('customerFName')}
                                      isInvalid={formik.errors.customerFName && formik.touched.customerFName}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.customerFName}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerMName">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control placeholder="Enter Middle Name" {...formik.getFieldProps('customerMName')}
                                  isInvalid={formik.errors.customerMName && formik.touched.customerMName}/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.customerMName}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3}><FormGroup controlId="customerLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter Last Name" {...formik.getFieldProps('customerLName')}
                                      isInvalid={formik.errors.customerLName && formik.touched.customerLName}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.customerLName}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerBDate">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date"
                                  placeholder="Enter Birth Date" {...formik.getFieldProps('customerBDate')}
                                  isInvalid={formik.errors.customerBDate && formik.touched.customerBDate}/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.customerBDate}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerBLocation">
                        <Form.Label>Birth Location</Form.Label>
                        <Form.Control placeholder="Enter Birth Location" {...formik.getFieldProps('customerBLocation')}
                                      isInvalid={formik.errors.customerBLocation && formik.touched.customerBLocation}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.customerBLocation}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3}><FormGroup controlId="firstIdentityType">
                        <Form.Label>First Identity Type</Form.Label>
                        <Form.Control as="select" custom {...formik.getFieldProps('firstIdentityType')}>
                            {identityOptions()}
                        </Form.Control>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="firstIdentity">
                        <Form.Label>First Identity</Form.Label>
                        <Form.Control placeholder="Enter First Identity" {...formik.getFieldProps('firstIdentity')}
                                      isInvalid={formik.errors.firstIdentity && formik.touched.firstIdentity}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstIdentity}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="secondIdentityType">
                    <Form.Label>Second Identity Type</Form.Label>
                    <Form.Control as="select" custom {...formik.getFieldProps('secondIdentityType')}>
                        <option>NONE</option>
                        {identityOptions()}
                    </Form.Control>
                </FormGroup></Col>
                </Form.Row>
                <Form.Row>

                    <Col xs={3}><FormGroup controlId="firstGender">
                    <Form.Label>First Gender</Form.Label>
                    <Form.Row>
                        <Col xs={4}>
                            <Form.Check
                                type='radio'
                                name='firstGender'
                                label='Male'
                                defaultChecked
                                {...formik.getFieldProps('firstGender')}/>
                        </Col>
                        <Col>
                            <Form.Check inline
                                        type='radio'
                                        name='firstGender'
                                        label='female'/>
                        </Col>
                    </Form.Row>
                </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="secondIdentity">
                    <Form.Label>Second Identity</Form.Label>
                    <Form.Control placeholder="Enter Second Identity" {...formik.getFieldProps('secondIdentity')}
                                  isInvalid={formik.errors.secondIdentity && formik.touched.secondIdentity}/>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.secondIdentity}
                    </Form.Control.Feedback>
                </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerMaritalStatus">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control as="select" custom {...formik.getFieldProps('customerMaritalStatus')}>
                            <option>NONE</option>
                            {maritalStatusOptions()}
                        </Form.Control>
                    </FormGroup></Col>
                </Form.Row>
                <Form.Row>

                    <Col xs={3}><FormGroup controlId="customerNationality">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control placeholder="Enter Nationality" {...formik.getFieldProps('customerNationality')}
                                      isInvalid={formik.errors.customerNationality && formik.touched.customerNationality}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.customerNationality}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="numberOfDependents">
                        <Form.Label>Number of Dependents</Form.Label>
                        <Form.Control
                            placeholder="Enter Number of Dependents" {...formik.getFieldProps('numberOfDependents')}
                            isInvalid={formik.errors.numberOfDependents && formik.touched.numberOfDependents}/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.numberOfDependents}
                        </Form.Control.Feedback>
                    </FormGroup></Col>
                    <Col xs={3}><FormGroup controlId="customerPositionOrTitle">
                    <Form.Label>Position or Title</Form.Label>
                    <Form.Control as="select" custom {...formik.getFieldProps('customerPositionOrTitle')}>
                        <option value='0'>NONE</option>
                        {titleOptions()}
                    </Form.Control>
                </FormGroup></Col>
                </Form.Row>
                <Form.Row>

                </Form.Row><Form.Row>

            </Form.Row>
            </fieldset>

        );
    }
};