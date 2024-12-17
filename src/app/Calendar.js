'use client';

import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import CalendarDay from './CalendarDay';

const Calendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const numDaysInMonth = new Date(year, month, 0).getDate();

    const [activeModal, setActiveModal] = useState(null);

    const [days, setDays] = useState({
        ids: [...Array(numDaysInMonth).keys()],
        events: {}
    });

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        if (activeModal) {
            const daysClone = [...days];
            daysClone[activeModal.day][activeModal.event].modalVisible = true;

            setDays(daysClone);
        }
    }, [activeModal]);

    const getEvents = async () => {
        const q = query(collection(db, 'events'));
        const querySnapshot = await getDocs(q);

        let updatedEvents = {};

        let index = 0;
        querySnapshot.forEach((doc) => {
            let docData = doc.data();
            docData.time = docData.time.toDate();
            const dayIndex = docData.time.getDate() - 1;

            updatedEvents[index] = { ...docData, id: index, day: dayIndex };

            index++;
        });

        setDays((prevState) => ({
            ...prevState,
            events: updatedEvents
        }));
    };

    return (
        <div className="calendar">
            {days.ids.map((dayId) => {
                let dayEvents = [];

                Object.keys(days.events).map((key) => {
                    if (days.events[key].day == dayId) {
                        dayEvents.push(days.events[key]);
                    }
                });

                return (
                    <CalendarDay
                        key={dayId}
                        id={dayId}
                        day={dayId + 1}
                        events={dayEvents}
                        activeModal={activeModal}
                        setActiveModal={setActiveModal}
                    />
                );
            })}
        </div>
    );
};

export default Calendar;
