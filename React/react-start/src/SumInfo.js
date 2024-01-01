import React from 'react'

function SumInfo(props) {
    return (
        <div className="suminfo">
            <h1> Sum = {props.total}</h1>
        </div>
    );
}

export default SumInfo