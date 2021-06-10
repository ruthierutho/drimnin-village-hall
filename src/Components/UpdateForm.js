import React, { useState } from 'react';

const UpdateForm = ({onUpdateSubmit}) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState();
    const [title, setTitle] = useState("");

    const handleTextChange = (evt) => {
        setText(evt.target.value);
    }

    const handleDateChange = (evt) => {
        setDate(evt.target.value)
    }

    const handleTitleChange = (evt) => {
        setTitle(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!text && !date && !title){
            return
        }
        onUpdateSubmit({text, date, title})
        setText("");
        setDate("");
        setTitle("");
    }

    return (
        <>
            <h3>Updates:</h3>
            <form className="update-form" onSubmit={handleSubmit}>

                <input type="text" size="40" placeholder="Title" value={title} onChange={handleTitleChange} /> 
                <br></br>
                <textarea placeholder="Say something..." value={text} onChange={handleTextChange} />
                <br></br>
                <input type="date" id="start" name="date-posted" value={date} onChange={handleDateChange}></input>
                <br></br>
                <input type="submit" value="save" />

            </form>
        </>

    )
}

export default UpdateForm;
