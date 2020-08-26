import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addresses from "./components/Addresses/Addresses";
import Form from 'react-bootstrap/Form';
import * as Yup from "yup";
import {Formik} from "formik";
import Top from "./components/top-component/Top";
import Bottom from "./components/bottom.component";

export default class App extends React.Component {
    render() {
        const maxLength = (length) => {
            return "The maximum length is " + length;
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
                firstGender: true, //true if male,false if female
                customerMaritalStatus: '',
                customerNationality: 'This must be talked about',
                numberOfDependents: '',
                customerPositionOrTitle: '', firstCity: '',
                firstAddressZipCode: '',
                firstAddressFax: '',
                firstAddressLine1: '',
                firstAddressLine2: '',
                firstAddressLine3: '',
                firstAddressPhone1: '',
                firstAddressPhone2: '',

                secondCity: '',
                secondAddressZipCode: '',
                secondAddressFax: '',
                secondAddressLine1: '',
                secondAddressLine2: '',
                secondAddressLine3: '',
                secondAddressPhone1: '',
                secondAddressPhone2: '',

                thirdCity: '',
                thirdAddressZipCode: '',
                thirdAddressFax: '',
                thirdAddressLine1: '',
                thirdAddressLine2: '',
                thirdAddressLine3: '',
                thirdAddressPhone1: '',
                thirdAddressPhone2: '',
                formAccountType: '',
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
                    onSubmit={(values, {setSubmitting}) => {
                        /*setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);*/
                    }}
                    validationSchema={Yup.object({
                        applicationId: Yup.string().required('Required').max(20, "The maximum is length 20"),
                        applicationDate: Yup.date().required('Required'),
                        bankId: Yup.string().required('Required').max(20, maxLength(20)),
                        branchId: Yup.string().required('Required').max(20, maxLength(20)),
                        customerId: Yup.string().required('Required').max(24, maxLength(24)),
                        parentCustomer: Yup.string().max(24, maxLength(24)),
                        CustomerParentRelation: Yup.string(),
                        promoter: Yup.string().max(20, maxLength(20, maxLength(20))),
                        customerTitle: Yup.string().required('Required'),
                        customerFName: Yup.string().required('Required').max(40, maxLength(40)),
                        customerMName: Yup.string().required('Required').max(40, maxLength(40)),
                        customerLName: Yup.string().required('Required').max(40, maxLength(40)),
                        customerBDate: Yup.date().required('Required'),
                        customerBLocation: Yup.string().max(24, maxLength(24)),
                        firstIdentityType: Yup.string().required('Required'),
                        firstIdentity: Yup.string().max(20, maxLength(20, maxLength(20))),
                        secondIdentityType: Yup.string(),
                        secondIdentity: Yup.string().max(20, maxLength(20)),
                        firstGender: Yup.string(),
                        customerMaritalStatus: Yup.string(),
                        customerNationality: Yup.string(),
                        numberOfDependents: Yup.string().test("Digits only", "The field should be an integer and should be less than 100", (value) => /^\d{1,2}$/.test(value)),
                        customerPositionOrTitle: Yup.string(),
                        firstCity: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        firstAddressZipCode: Yup.string()
                            .max(5, 'Must be 5 characters or less'),
                        firstAddressLine1: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        firstAddressLine2: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        firstAddressLine3: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        firstAddressFax: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        firstAddressPhone1: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        firstAddressPhone2: Yup.string()
                            .max(20, 'Must be 20 characters or less'),

                        secondCity: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        secondAddressZipCode: Yup.string()
                            .max(5, 'Must be 5 characters or less'),
                        secondAddressLine1: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        secondAddressLine2: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        secondAddressLine3: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        secondAddressFax: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        secondAddressPhone1: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        secondAddressPhone2: Yup.string()
                            .max(20, 'Must be 20 characters or less'),

                        thirdCity: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        thirdAddressZipCode: Yup.string()
                            .max(5, 'Must be 5 characters or less'),
                        thirdAddressLine1: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        thirdAddressLine2: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        thirdAddressLine3: Yup.string()
                            .max(40, 'Must be 40 characters or less'),
                        thirdAddressFax: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        thirdAddressPhone1: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
                        thirdAddressPhone2: Yup.string()
                            .max(20, 'Must be 20 characters or less'),
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
                    })}>
                {formik=>(
                    <Form className="form">
                        <Top formik={formik}/>
                        <Addresses formik={formik}/>
                        {/*<Bottom formik={formik}/>*/}
                    </Form>
                )

                }

            </Formik>
        )
    }
}



