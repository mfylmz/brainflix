import React from 'react';

function TimeStamp(props) {
    return (
        <div>
            <p className={props.className}> {new Date(props.timestamp).toLocaleDateString()}</p> 
        </div>   
    )
}

export default TimeStamp;
