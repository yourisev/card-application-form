import Form from "react-bootstrap/Form"
import React from "react";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Addresses.css'


const Addresses = (props) => {
    const formik = props.formik;
    return (
            <div>
                <legend>
                    First Address Information<br/><br/>
                </legend>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstAddressType" xs={3}>
                        <Form.Label>First Address Type</Form.Label>
                        <Form.Control as="select" defaultValue="Mailing Address">
                            <option>Mailing Address</option>
                            <option>Employee Address</option>
                            <option>Residence Address</option>
                            <option>Mailing Address 2D</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstCity" xs={3}>
                        <Form.Label>First City</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstCity')} isInvalid={formik.touched.firstCity && formik.errors.firstCity
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstCity}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstAddressZipCode" xs={3} >
                        <Form.Label>First Address Zip Code</Form.Label>
                        <Form.Control {...formik.getFieldProps('firstAddressZipCode')} isInvalid={formik.touched.firstAddressZipCode && formik.errors.firstAddressZipCode
                       }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressZipCode}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstAddressLine1" xs={3}>
                        <Form.Label>First Address Line1</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstAddressLine1')} isInvalid={formik.touched.firstAddressLine1 && formik.errors.firstAddressLine1
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressLine1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstAddressLine2" xs={3}>
                        <Form.Label>First Address Line2</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstAddressLine2')} isInvalid={formik.touched.firstAddressLine2 && formik.errors.firstAddressLine2
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressLine2}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstAddressLine3" xs={3}>
                        <Form.Label>First Address Line3</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstAddressLine3')} isInvalid={formik.touched.firstAddressLine3 && formik.errors.firstAddressLine3
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressLine3}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstAddressFax" xs={3}>
                        <Form.Label>First Address Fax</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstAddressFax')} isInvalid={formik.touched.firstAddressLine1 && formik.errors.firstAddressFax
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressFax}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstAddressPhone1" xs={3}>
                        <Form.Label>First Address Phone1</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstAddressPhone1')} isInvalid={formik.touched.firstAddressPhone1 && formik.errors.firstAddressPhone
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressPhone1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstAddressPhone2" xs={3}>
                        <Form.Label>First Address Phone2</Form.Label>
                        <Form.Control{...formik.getFieldProps('firstAddressPhone2')} isInvalid={formik.touched.firstAddressPhone2 && formik.errors.firstAddressPhone2
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.firstAddressPhone2}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <legend>
                    <br/>Second Address Information
                </legend>
                <Form.Row>
                    <Form.Group as={Col} controlId="secondAddressType" xs={3}>
                        <Form.Label>Second Address Type</Form.Label>
                        <Form.Control as="select" defaultValue="None">
                            <option>Mailing Address</option>
                            <option>Employee Address</option>
                            <option>Residence Address</option>
                            <option>Mailing Address 2D</option>
                            <option>None</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="secondCity" xs={3}>
                        <Form.Label>Second City</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondCity')} isInvalid={formik.touched.secondCity && formik.errors.secondCity
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondCity}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="secondAddressZipCode" xs={3}>
                        <Form.Label>Second Address Zip Code</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressZipCode')} isInvalid={formik.touched.secondAddressZipCode && formik.errors.secondAddressZipCode
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressZipCode}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="secondAddressLine1" xs={3}>
                        <Form.Label>Second Address Line1</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressLine1')} isInvalid={formik.touched.secondAddressLine1 && formik.errors.secondAddressLine1
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressLine1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="secondAddressLine2" xs={3}>
                        <Form.Label>Second Address Line2</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressLine2')} isInvalid={formik.touched.secondAddressLine2 && formik.errors.secondAddressLine
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressLine2}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="secondAddressLine3" xs={3}>
                        <Form.Label>Second Address Line3</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressLine3')} isInvalid={formik.touched.secondAddressLine3 && formik.errors.secondAddressLine3
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressLine3}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="secondAddressFax" xs={3}>
                        <Form.Label>Second Address Fax</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressFax')} isInvalid={formik.touched.secondAddressFax && formik.errors.secondAddressFax
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressFax}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="secondAddressPhone1" xs={3}>
                        <Form.Label>Second Address Phone1</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressPhone1')} isInvalid={formik.touched.secondAddressPhone1 && formik.errors.secondAddressPhone1
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressPhone1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="secondAddressPhone2" xs={3}>
                        <Form.Label>Second Address Phone2</Form.Label>
                        <Form.Control{...formik.getFieldProps('secondAddressPhone2')} isInvalid={formik.touched.secondAddressPhone2 && formik.errors.secondAddressPhone2
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.secondAddressPhone2}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <legend>
                    <br/>Third Address Information
                </legend>
                <Form.Row>
                    <Form.Group as={Col} controlId="thirdAddressType" xs={3}>
                        <Form.Label>Third Address Type</Form.Label>
                        <Form.Control as="select" defaultValue="None">
                            <option>Mailing Address</option>
                            <option>Employee Address</option>
                            <option>Residence Address</option>
                            <option>Mailing Address 2D</option>
                            <option>None</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="thirdCity" xs={3}>
                        <Form.Label>Third City</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdCity')} isInvalid={formik.touched.thirdCity && formik.errors.thirdCity
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdCity}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="thirdAddressZipCode" xs={3}>
                        <Form.Label>Third Address Zip Code</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdAddressZipCode')} isInvalid={formik.touched.thirdAddressZipCode && formik.errors.thirdAddressZipCode
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressZipCode}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="thirdAddressLine1" xs={3}>
                        <Form.Label>ThirdSecond Address Line1</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdAddressLine1')} isInvalid={formik.touched.thirdAddressLine1 && formik.errors.thirdAddressLine1
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressLine1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="thirdAddressLine2" xs={3}>
                        <Form.Label>Third Address Line2</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdAddressLine2')} isInvalid={formik.touched.thirdAddressLine2 && formik.errors.thirdAddressLine2
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressLine2}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="thirdAddressLine3" xs={3}>
                        <Form.Label>Third Address Line3</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdAddressLine3')} isInvalid={formik.touched.thirdAddressLine3 && formik.errors.thirdAddressLine3
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressLine3}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="thirdAddressFax" xs={3}>
                        <Form.Label>Third Address Fax</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdAddressFax')} isInvalid={formik.touched.thirdAddressFax && formik.errors.thirdAddressFax
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressFax}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="thirdAddressPhone1" xs={3}>
                        <Form.Label>Third Address Phone1</Form.Label>
                        <Form.Control {...formik.getFieldProps('thirdAddressPhone1')} isInvalid={formik.touched.thirdAddressPhone1 && formik.errors.thirdAddressPhone1
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressPhone1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="thirdAddressPhone2" xs={3}>
                        <Form.Label>Third Address Phone2</Form.Label>
                        <Form.Control{...formik.getFieldProps('thirdAddressPhone2')} isInvalid={formik.touched.thirdAddressPhone2 && formik.errors.thirdAddressPhone2
                        }/>
                        <Form.Control.Feedback type='invalid'>
                            {formik.errors.thirdAddressPhone2}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
            </div>
            )

}

export default Addresses;