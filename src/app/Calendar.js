import CalendarDay from './CalendarDay';

const Calendar = () => {
    const getDaysOfMonth = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return new Date(year, month, 0).getDate();
    };

    return (
        <div className="calendar">
            {[...Array(getDaysOfMonth())].map((element, index) => (
                <CalendarDay key={index} day={index + 1} />
            ))}
        </div>
    );
};

export default Calendar;
