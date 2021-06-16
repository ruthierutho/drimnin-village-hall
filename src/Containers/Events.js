import React, { useState } from 'react';
import UpdatesList from '../Components/UpdatesList';
import UpdateForm from '../Components/UpdateForm';


const Events = () => {

    const [updates, setUpdates] = useState([])

    const addUpdate = (newUpdate) => {
        newUpdate.id = Date.now();
        const updateUpdates = [...updates, newUpdate];
        setUpdates(updateUpdates);
    }

    return (
        <>
        <UpdateForm onUpdateSubmit={(update) => addUpdate(update)}></UpdateForm>
        <UpdatesList updates={updates}></UpdatesList>
        </>
    )


}

export default Events;