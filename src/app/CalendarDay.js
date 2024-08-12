'use client';

import CalendarEvent from './CalendarEvent';

const CalendarDay = ({ day, events }) => {
    return (
        <div className="calendar-day">
            <span className="cd-day">{day}</span>

            {events ? (
                <div className="cd-events">
                    {events.map((eventInfo, index) => (
                        <CalendarEvent key={index} eventInfo={eventInfo} />
                    ))}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default CalendarDay;
