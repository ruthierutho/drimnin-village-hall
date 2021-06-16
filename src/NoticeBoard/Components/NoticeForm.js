import React, { useState } from 'react';

const NoticeForm = ({onNoticeSubmit}) => {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const handleTextChange = (evt) => {
        setText(evt.target.value);
    }

    const handleTitleChange = (evt) => {
        setTitle(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!text && !title){
            return
        }
        onNoticeSubmit({text, title})
        setText("");
        setTitle("");
    }

    return (
        <>
            <h3>Notice form:</h3>
            <form className="notice-form" onSubmit={handleSubmit}>

                <input type="text" size="40" placeholder="Title" value={title} onChange={handleTitleChange} /> 
                <br></br>
                <textarea placeholder="Say something..." value={text} onChange={handleTextChange} />
                <br></br>
                <input type="submit" value="save" />

            </form>
        </>

    )
}

export default NoticeForm;
