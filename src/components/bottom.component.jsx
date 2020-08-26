import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";

const Bottom = () => {
    var s_checked;
    var n_checked;

    return (
        <Formik
            initialValues={{
                formCardTypeRadios2: true,
                formAccountTypeRadios2: false,
                formMXPAccount: '',
                formBankAccount: '',
                formAccountCurrency: '',
                formDebitProgramId: '',
                formCreditLimit: '',
                formGuaranteeType: '',
                formGuaranteeValue: '',
                formGuaranteeInfo: '',
                formFirstName: '',
                formMiddleName: '',
                formLastName: '',
                formNameOnCard: '',
                formCorporateName: '',
                formCardProgramId: '',
                formEffectiveDate: '',
                formPrimaryCard: '',
                formCardDesignFee: '',
                formDeliveryOperator: '',
                formExpressDeliveryFee: '',
                formCardPersonalizationFee: '',
                formCorespondence: '',

            }}
            validationSchema={Yup.object({
                formAccountType: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                formMXPAccount: Yup.string()
                    .max(24, 'Must be 24 characters or less')
                    .required('Required'),
                formBankAccount: Yup.string()
                    .max(24, 'Must be 24 characters or less')
                    .required('Required'),
                formAccountCurrency: Yup.string()
                    .max(3, 'Must be 3 characters or less')
                    .required('Required'),
                formDebitProgramId: Yup.string()
                    .max(10, 'Must be 10 characters or less')
                    .required('Required'),
                formCreditLimit: Yup.string()
                    .test(
                        'is-decimal',
                        'invalid input',
                        value => (value + "").match(/^[0-9]{1,12}(?:\.[0-9]{1,3})?$/),
                    )
                    .required('Required'),
                formGuaranteeType: Yup.string()
                    .test(
                        'is-decimal',
                        'invalid input',
                        value => (value + "").match(/^[0-9]{1,12}(?:\.[0-9]{1,3})?$/),
                    ),
                formGuaranteeValue: Yup.number()
                    .max(15, 'Must be 15 characters or less'),
                formGuaranteeInfo: Yup.string()
                    .max(80, 'Must be 80 characters or less'),
                formFirstName: Yup.string()
                    .max(40, 'Must be 40 characters or less')
                    .required('Required'),
                formMiddleName: Yup.string()
                    .max(40, 'Must be 40 characters or less')
                    .required('Required'),
                formLastName: Yup.string()
                    .max(40, 'Must be 40 characters or less')
                    .required('Required'),
                formNameOnCard: Yup.string()
                    .max(25, 'Must be 25 characters or less')
                    .required('Required'),
                formCorporateName: Yup.string()
                    .max(25, 'Must be 25 characters or less'),
                formCardProgramId: Yup.string()
                    .max(10, 'Must be 10 characters or less')
                    .required('Required'),
                formEffectiveDate: Yup.date()
                    .required('Required'),
                formPrimaryCard: Yup.string()
                    .max(19, 'Must be 19 characters or less')
                    .required('Required'),
                formCardDesignFee: Yup.string()
                    .max(10, 'Must be 10 characters or less'),
                formDeliveryOperator: Yup.string()
                    .max(10, 'Must be 10 characters or less'),
                formExpressDeliveryFee: Yup.string()
                    .max(10, 'Must be 10 characters or less'),
                formCardPersonalizationFee: Yup.string()
                    .max(10, 'Must be 10 characters or less'),
                formCorespondence: Yup.string()
                    .max(10, 'Must be 10 characters or less'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <div>
                    <fieldset>
                        <legend>Part 1</legend>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formLanguage">
                                <Form.Label>Language </Form.Label>
                                <Form.Control as="select">
                                    <option value="1">French</option>
                                    <option value="2">English</option>
                                    <option value="3">Arabe</option>
                                    <option selected value="4">None</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formAccountType">
                                <Form.Label>Account Type </Form.Label>
                                <Form.Check inline defaultChecked
                                            type="radio"
                                            label="O"
                                            name="formAccountTypeRadios"
                                            id="formAccountTypeRadios1"
                                            onClick={(e) => {
                                                formik.values.formAccountTypeRadios2 = false
                                            }}
                                />
                                <Form.Check inline {...formik.getFieldProps("formAccountTypeRadios2")}
                                            type="radio"
                                            label="N"
                                            name="formAccountTypeRadios"
                                            id="formAccountTypeRadios2"
                                            onClick={(e) => {
                                                formik.values.formAccountTypeRadios2 = true
                                            }}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formMXPAccount">
                                <Form.Label>MXP Account</Form.Label>
                                <Form.Control disabled={!formik.values.formAccountTypeRadios2} type="text"
                                              placeholder="MXP Account" {...formik.getFieldProps('formMXPAccount')}
                                              isInvalid={formik.touched.formMXPAccount && formik.errors.formMXPAccount}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formMXPAccount}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBankAccount">
                                <Form.Label>Bank Account</Form.Label>
                                <Form.Control disabled={!formik.values.formAccountTypeRadios2} type="text"
                                              placeholder="Bank Account" {...formik.getFieldProps('formBankAccount')}
                                              isInvalid={formik.touched.formBankAccount && formik.errors.formBankAccount && formik.values.formAccountTypeRadios2}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formBankAccount}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>
                    </fieldset>

                    <fieldset>
                        <legend>Part 2</legend>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formAccountCurrency">
                                <Form.Label>Account Currency</Form.Label>
                                <Form.Control disabled={!formik.values.formAccountTypeRadios2} type="text"
                                              placeholder="e.g XAF" {...formik.getFieldProps('formAccountCurrency')}
                                              isInvalid={formik.touched.formAccountCurrency && formik.errors.formAccountCurrency && formik.values.formAccountTypeRadios2}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formAccountCurrency}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDebitProgramId">
                                <Form.Label>Debit Program Id(to be provided by bank)</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Debit Program Id" {...formik.getFieldProps('formDebitProgramId')}
                                              isInvalid={formik.touched.formDebitProgramId && formik.errors.formDebitProgramId && formik.values.formAccountTypeRadios2}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formDebitProgramId}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCreditLimit">
                                <Form.Label>Credit Limit</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Credit Limit" {...formik.getFieldProps('formCreditLimit')}
                                              isInvalid={formik.touched.formCreditLimit && formik.errors.formCreditLimit}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formCreditLimit}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGuaranteeType">
                                <Form.Label>Guarantee Type</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Guarantee Type" {...formik.getFieldProps('formGuaranteeType')}
                                              isInvalid={formik.touched.formGuaranteeType && formik.errors.formGuaranteeType}/>
                                <Form.Control.Feedback>{formik.errors.formGuaranteeType}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGuaranteeValue">
                                <Form.Label>Guarantee Value</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Guarantee Value" {...formik.getFieldProps('formGuaranteeValue')}
                                              isInvalid={formik.touched.formGuaranteeValue && formik.errors.formGuaranteeValue}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formGuaranteeValue}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </fieldset>

                    <fieldset>
                        <legend>Part 3</legend>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGuaranteeInfo">
                                <Form.Label>Guarantee Info</Form.Label>
                                <Form.Control type="textarea"
                                              placeholder="Guarantee Info" {...formik.getFieldProps('formGuaranteeInfo')}
                                              isInvalid={formik.touched.formGuaranteeInfo && formik.errors.formGuaranteeInfo}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formGuaranteeInfo}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </fieldset>

                    <fieldset>
                        <legend>Part 4</legend>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option value="1">Mr</option>
                                    <option value="2">Miss</option>
                                    <option value="3">Mrs</option>
                                    <option value="4">Dr</option>
                                    <option value="5">Eng</option>
                                    <option value="6">H.E</option>
                                    <option value="7">Messrs</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="First Name" {...formik.getFieldProps('formFirstName')}
                                              isInvalid={formik.touched.formFirstName && formik.errors.formFirstName}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formFirstName}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formMiddleName">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Middle Name" {...formik.getFieldProps('formMiddleName')}
                                              isInvalid={formik.touched.formMiddleName && formik.errors.formMiddleName}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formMiddleName}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Last Name" {...formik.getFieldProps('formLastName')}
                                              isInvalid={formik.touched.formLastName && formik.errors.formLastName}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formLastName}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formNameOnCard">
                                <Form.Label>Name On Card</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Name On Card" {...formik.getFieldProps('formNameOnCard')}
                                              isInvalid={formik.touched.formNameOnCard && formik.errors.formNameOnCard}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formNameOnCard}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formCorporateName">
                                <Form.Label>Corporate Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Corporate Name" {...formik.getFieldProps('formCorporateName')}
                                              isInvalid={formik.touched.formCorporateName && formik.errors.formCorporateName}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formCorporateName}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formCardProgramId">
                                <Form.Label>Card Program Id(to be provided by bank)</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Card Program Id" {...formik.getFieldProps('formCardProgramId')}
                                              isInvalid={formik.touched.formCardProgramId && formik.errors.formCardProgramId}/>
                                <Form.Control.Feedback>{formik.errors.formCorporateName}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>
                    </fieldset>

                    <fieldset>
                        <legend>Part 5</legend>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formCardNumberType">
                                <Form.Label>Card Number Type</Form.Label>
                                <Form.Check inline
                                            type="radio"
                                            label="Automatic"
                                            name="formCardNumberTypeRadios"
                                            id="formCardNumberTypeRadios1"
                                />
                                <Form.Check inline
                                            type="radio"
                                            label="Manual"
                                            name="formCardNumberTypeRadios"
                                            id="formCardNumberTypeRadios2"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formEffectiveDate">
                                <Form.Label> Effective Date</Form.Label>
                                <Form.Control type="date" {...formik.getFieldProps('formEffectiveDate')}
                                              isInvalid={formik.touched.formEffectiveDate && formik.errors.formEffectiveDate}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formEffectiveDate}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </fieldset>

                    <fieldset>
                        <legend>Part 6</legend>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formCardType">
                                <Form.Label>Card Type</Form.Label>
                                <Form.Check inline
                                            type="radio"
                                            label="Primary"
                                            name="formCardTypeRadios"
                                            id="formCardTypeRadios1"
                                            onClick={(e)=>formik.values.formCardTypeRadios2=false}
                                />
                                <Form.Check inline
                                            type="radio"
                                            label="Secondary"
                                            name="formCardTypeRadios"
                                            id="formCardTypeRadios2"
                                            defaultChecked
                                            onClick={(e)=>formik.values.formCardTypeRadios2=true}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPrimaryCard">
                                <Form.Label>Primary Card</Form.Label>
                                <Form.Control disabled={!formik.values.formCardTypeRadios2} type="text"
                                              placeholder="Primary Card" {...formik.getFieldProps('formPrimaryCard')}
                                              isInvalid={formik.touched.formPrimaryCard && formik.errors.formPrimaryCard && formik.values.formCardTypeRadios2}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formPrimaryCard}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCertifyNewCardDesign">
                                <Form.Label>New Card Design</Form.Label>
                                <Form.Check inline
                                            type="radio"
                                            label="Yes"
                                            name="formCertifyNewCardDesignRadios"
                                            id="formCertifyNewCardDesignRadios1"
                                />
                                <Form.Check inline
                                            type="radio"
                                            label="No"
                                            name="formCertifyNewCardDesignRadios"
                                            id="formCertifyNewCardDesignRadios2"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formCardDesignFee">
                                <Form.Label>Card Design Fee</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Card Design Fee" {...formik.getFieldProps('formCardDesignFee')}
                                              isInvalid={formik.touched.formCardDesignFee && formik.errors.formCardDesignFee}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formCardDesignFee}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCertifyExpressDelivery">
                                <Form.Label>Express Delivery</Form.Label>
                                <Form.Check inline
                                            type="radio"
                                            label="Yes"
                                            name="formCertifyExpressDeliveryRadios"
                                            id="formCertifyExpressDeliveryRadios1"
                                />
                                <Form.Check inline
                                            type="radio"
                                            label="No"
                                            name="formCertifyExpressDeliveryRadios"
                                            id="formCertifyExpressDeliveryRadios2"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDeliveryOperator">
                                <Form.Label>Delivery Operator</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Delivery Operator" {...formik.getFieldProps('formDeliveryOperator')}
                                              isInvalid={formik.touched.formDeliveryOperator && formik.errors.formDeliveryOperator}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formDeliveryOperator}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formExpressDeliveryFee">
                                <Form.Label>Express Delivery Fee</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Express Delivery Fee" {...formik.getFieldProps('formExpressDeliveryFee')}
                                              isInvalid={formik.touched.formExpressDeliveryFee && formik.errors.formExpressDeliveryFee}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formExpressDeliveryFee}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formCardPersonalizationFee">
                                <Form.Label>Card Personalization Fee</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Card Personalization Fee" {...formik.getFieldProps('formCardPersonalizationFee')}
                                              isInvalid={formik.touched.formCardPersonalizationFee && formik.errors.formCardPersonalizationFee}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formCardPersonalizationFee}</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCorespondence">
                                <Form.Label>Corespondence Type</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Corespondence Type" {...formik.getFieldProps('formCorespondence')}
                                              isInvalid={formik.touched.formCorespondence && formik.errors.formCorespondence}/>
                                <Form.Control.Feedback
                                    type='invalid'>{formik.errors.formCorespondence}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formClientType">
                                <Form.Label>Client Type</Form.Label>
                                <Form.Check inline
                                            type="radio"
                                            label="Individual"
                                            name="formClientTypeRadios"
                                            id="formClientTypeRadios1"
                                />
                                <Form.Check inline
                                            type="radio"
                                            label="Bank Staff"
                                            name="formClientTypeRadios"
                                            id="formClientTypeRadios2"
                                />
                            </Form.Group>
                        </Form.Row>
                    </fieldset>
                </div>
            )}
        </Formik>
    );
};

export default Bottom;