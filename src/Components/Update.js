import React from 'react';

const Update = ({date, text, title}) => {
    return (
        <>
            <h3>{title}</h3> <p>{date}</p>
            <p>{text}</p>
        </>
    )
}

export default Update;