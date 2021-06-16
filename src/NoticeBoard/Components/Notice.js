import React from 'react';

const Notice = ({ text, title}) => {
    return (
        <>
        <div className="notice">
        <h3>{title}</h3>
            <p>{text}</p>
        </div>
            
        </>
    )
}

export default Notice;