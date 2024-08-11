'use client';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import CalendarDay from './CalendarDay';

const Calendar = () => {
    const [monthEvents, setMonthEvents] = useState();

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysOfMonth = new Date(year, month, 0).getDate();

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        const q = query(collection(db, 'events'));
        let eventsClean = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let docData = doc.data();
            docData.time = docData.time.toDate();
            eventsClean.push(docData);
        });

        setMonthEvents(eventsClean);
    };

    return (
        <div className="calendar">
            {[...Array(daysOfMonth)].map((element, index) => (
                <CalendarDay key={index} day={index + 1} events={monthEvents} />
            ))}
        </div>
    );
};

export default Calendar;
