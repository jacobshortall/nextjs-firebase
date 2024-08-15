'use client';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import CalendarDay from './CalendarDay';

const Calendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysOfMonth = new Date(year, month, 0).getDate();

    const [days, setDays] = useState([...Array(daysOfMonth - 1)]);

    useEffect(() => {
        const updateEvents = async () => {
            await getEvents();
        };

        updateEvents();
    }, []);

    const getEvents = async () => {
        const q = query(collection(db, 'events'));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let docData = doc.data();
            docData.time = docData.time.toDate();

            const updatedDays = [
                ...days.slice(0, docData.time.getDate() - 1),
                [docData],
                ...days.slice(docData.time.getDate() - 1)
            ];

            setDays(updatedDays);
        });
    };

    return (
        <div className="calendar">
            {days.map((dayEvents, index) => {
                return (
                    <CalendarDay
                        key={index}
                        day={index + 1}
                        events={dayEvents}
                    />
                );
            })}
        </div>
    );
};

export default Calendar;
