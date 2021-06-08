import React from 'react';
import Update from './Update';

const UpdateList = ({updates}) => {
    const updatesArray = updates.map(update => {
        return(
            <Update key={update.id} date={update.date} title={update.title} text={update.text}></Update>
        )
    })

    return (
        <>
            <h1>Updates List:</h1>
            {updatesArray}
        </>
    )
}

export default UpdateList;