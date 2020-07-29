import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentRow from './student';

const studentData = [
    {
        'No':1,
        'Name':'Andrew',
        'Subject1':60,
        'Subject2':45,
        'Subject3':33,
        'Subject4':57,
        'Subject5':67
    },
    {
        'No':2,
        'Name':'Raj',
        'Subject1':90,
        'Subject2':86,
        'Subject3':87,
        'Subject4':90,
        'Subject5':93
    },
    {
        'No':3,
        'Name':'Sam',
        'Subject1':67,
        'Subject2':88,
        'Subject3':78,
        'Subject4':86,
        'Subject5':80
    },
    {
        'No':4,
        'Name':'Jack',
        'Subject1':90,
        'Subject2':89,
        'Subject3':84,
        'Subject4':92,
        'Subject5':96
    },
    {
        'No':5,
        'Name':'Jim',
        'Subject1':54,
        'Subject2':34,
        'Subject3':53,
        'Subject4':45,
        'Subject5':50
    }
];
export default class StudentList extends Component {

    render() {
        const listToDisplay = studentData.map((element)=> {
            return <StudentRow {...element}/>
            
            // No={element.No} Name={element.Name}
            // Subject1={element.Subject1} Subject2={element.Subject2}
            // Subject3={element.Subject3} Subject4={element.Subject4}/>
        });

        return (
            <div className="container">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Subject1</th>
                            <th>Subject2</th>
                            <th>Subject3</th>
                            <th>Subject4</th>
                            <th>Subject5</th>
                            <th>Total</th>
                            <th>Percentages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listToDisplay}
                    </tbody>
                </table>
            </div>
        )
    }
}
