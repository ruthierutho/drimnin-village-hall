import React, { useState } from 'react';

const UpdateForm = ({onUpdateSubmit}) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState();

    const handleTextChange = (evt) => {
        setText(evt.target.value);
    }

    const handleDateChange = (evt) => {
        setDate(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!text && !date){
            return
        }
        onUpdateSubmit({text, date})
    }

    return (
        <>
            <h3>Updates:</h3>
            <form className="update-form" onSubmit={handleSubmit}>

                <input type="text" size="80" placeholder="Say something..." value={text} onChange={handleTextChange} />
                <input type="date" id="start" name="date-posted" value={date} onChange={handleDateChange}></input>
                <input type="submit" value="save" />

            </form>
        </>

    )
}

export default UpdateForm;
