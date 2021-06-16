import React from 'react';
import Notice from './Notice';

const NoticeList = ({notices}) => {
    const noticesArray = notices.map(notice => {
        return(
            <Notice key={notice.id} title={notice.title} text={notice.text} />
        )
    })

    return (
        <>
            <h1>Notices:</h1>
            {noticesArray}
        </>
    )
}

export default NoticeList;