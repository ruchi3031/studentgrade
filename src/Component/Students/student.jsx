import React from 'react';
import LabelMarks from './labelmarks';
import LabelPercentage from './labelPercentage';

function StudentRow(props){
    const {No,Name,Subject1,Subject2,Subject3,Subject4,Subject5} = props;
    const total = Subject1+Subject2+Subject3+Subject4+Subject5;
    const percentage = Math.round(total/500 * 100);
    return <tr>
        <td>{No}</td>
        <td>{Name}</td>
        <td>
        <LabelMarks max="80" min="40" scores={Subject1}/>
        </td>
        <td>
        <LabelMarks max="80" min="40" scores={Subject2}/>
        </td>
        <td>
        <LabelMarks max="80" min="40" scores={Subject3}/>
        </td>
        <td>
        <LabelMarks max="80" min="40" scores={Subject4}/>
        </td>
        <td>
        <LabelMarks max="80" min="40" scores={Subject4}/>
        </td>
        <td><LabelMarks max="300" min="200" scores={total}/></td>
        <td><LabelPercentage max="75" min="55" scores={percentage}/></td>
    </tr>;
}

export default StudentRow;