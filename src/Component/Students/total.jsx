import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// function TotalScore(props){
//     const {Subject1, Subject2, Subject3, Subject4} = props;
//     return <span>{Subject1+Subject2+Subject3+Subject4}</span>;
// }

const TotalScore = (props)=> {
    const {Subject1,Subject2,Subject3,Subject4,Subject5} = props;
    const total = () => Subject1+Subject2+Subject3+Subject4+Subject5;
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

export default TotalScore;