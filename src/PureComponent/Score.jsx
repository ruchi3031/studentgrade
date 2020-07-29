import React, { Component } from 'react';

export default class Score extends React.PureComponent {
    
    render() {
        const { text , score = 0, total = Math.max(1,score)} = this.props;
        return (
            <div>
                <h6>{text}</h6>
                <span>{Math.round(score/total * 100)}%</span>
            </div>
        )
    }
}
