import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Percentages = (props)=> {
    const {Subject1,Subject2,Subject3,Subject4,Subject5} = props;
    const total = () => Subject1+Subject2+Subject3+Subject4+Subject5;
    const Percentage = () => (total/500) * 100%
    const display = () => {
        if(total()>=350)
        {
            return <span className="badge badge-success">{total()}</span>
        }
        else {
            return <span className="badge badge-warning">{total()}</span>
        }
    };
    return <span>{display()}</span>;
}

const Percentages = (props)=> {
    const {TotalScore} = props;
    return <span>{Math.round(TotalScore/ 100)}%</span>
}

export default Percentages;