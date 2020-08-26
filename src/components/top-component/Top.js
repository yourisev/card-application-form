import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Part1 from "./Part1";
import Part2 from "./Part2";


export default class Top extends React.Component {
    render() {
        const {formik} = this.props;
        return (
            <div>
                <Part1 formik={formik}/>
                <Part2 formik={formik}/>
            </div>
        );
    }
}