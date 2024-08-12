const CalendarEvent = ({ eventInfo }) => {
    const handleClick = () => {
        return;
    };

    return (
        <div className="calendar-event" onClick={handleClick}>
            <span>{eventInfo.title}</span>
            <span>{eventInfo.time.getHours()}</span>
        </div>
    );
};

export default CalendarEvent;
