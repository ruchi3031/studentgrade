import React, { Component } from 'react';
import Score from '../PureComponent/Score';

export default class StudentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            id:"",
            address:"",
            subject:"",
            grade:"",
            IsDisplay:false
        };
    }

    setStudentName(elementRef) {
        this.setState({studentname:elementRef.target.value});
        console.log(this.state);
    }

    setStudentid(elementRef) {
        this.setState({studentid:elementRef.target.value});
        console.log(this.state);
    }

    setStudentaddr(elementRef) {
        this.setState({studentaddr:elementRef.target.value});
        console.log(this.state);
    }

    setStudentsubj(elementRef) {
        this.setState({studentsubj:elementRef.target.value});
        console.log(this.state);
    }

    setStudentgrade(elementRef) {
        this.setState({studentgrade:elementRef.target.value});
        console.log(this.props.Score);
    }

    onClick() {
        this.setState({IsDisplay:true});
    }

    render() {

        let displayData = () => {
            let isDis = this.state.IsDisplay;
            if(isDis == true)
            {
                return <div>
                    Student Name: {this.state.studentname}
                    <br/>
                    Student ID: {this.state.studentid}
                    <br/>
                    Student Address: {this.state.studentaddr}
                    <br/>
                    Student Subject: {this.state.studentsubj}
                    <br/>
                    Student Grade: {this.state.studentgrade}
                </div>
            }
            else 
                return <h4>No change</h4>
        }

        return (
            <div>
                <h1>{this.props.title}</h1>
                <table>
                    <tr>
                        <td>
                            Student Name:
                        </td>
                        <td>
                            <input type="Text" onChange={(elementRef)=>this.setStudentName(elementRef)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Student ID:
                        </td>
                        <td>
                            <input type="Text"onChange={(elementRef)=>this.setStudentid(elementRef)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Student Address: 
                        </td>
                        <td>
                            <input type="Text" onChange={(elementRef)=>this.setStudentaddr(elementRef)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Student Subject: 
                        </td>
                        <td>
                            <input type="Text" onChange={(elementRef)=>this.setStudentsubj(elementRef)}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Student Grade: 
                        </td>
                        <td>
                            <input type="Text" onChange={(elementRef)=>this.setStudentgrade(elementRef)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={()=>this.onClick()}>Submit</button>
                        </td>
                        {}
                        <td>
                        <button>Cancel</button>
                        </td>
                    </tr>
                    {displayData()}
                </table>
            </div>
        )
    }
}
