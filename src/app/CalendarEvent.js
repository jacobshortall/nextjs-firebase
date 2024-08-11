const CalendarEvent = ({ eventInfo }) => {
    return (
        <div className="calendar-event">
            <span>{eventInfo.title}</span>
            <span>{eventInfo.time.getHours()}</span>
        </div>
    );
};

export default CalendarEvent;
