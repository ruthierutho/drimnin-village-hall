import React, { useState } from 'react';
import NoticeList from '../Components/NoticeList'
import NoticeForm from '../Components/NoticeForm';
import '../notice-board.css';


const NoticeBoard = () => {

    const [notices, setNotices] = useState([])

    const addNotice = (newNotice) => {
        newNotice.id = Date.now();
        const updateNotices = [...notices, newNotice];
        setNotices(updateNotices);
    }

    return (
        <>
        <NoticeForm onNoticeSubmit={(notice) => addNotice(notice)} />
        <NoticeList notices={notices} />
        </>
    )


}

export default NoticeBoard;