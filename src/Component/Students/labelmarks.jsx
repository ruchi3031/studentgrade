import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const LabelMarks = (props)=> {
    const {max,min,scores} = props;
    const display = ()=> {
        if(scores>=max) {
            return <span className="badge badge-success">{scores}</span>
       }
       else if (scores<min){
           return <span className="badge badge-danger">{scores}</span>
       }
       else {
        return <span className="badge badge-info">{scores}</span>
       }
    }
return <p>{display()}</p>
};

export default LabelMarks;
