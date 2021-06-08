import React from 'react';

const Update = ({date, text, title}) => {
    return (
        <>
            <h3>{title}</h3>
            <h5>{text}</h5>
            <p>{date}</p>
        </>
    )
}

export default Update;