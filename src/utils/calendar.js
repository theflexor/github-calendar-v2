import dayjs from "dayjs";
import 'dayjs/locale/ru'
export const getCalendar = (daysBack, data,date) => {
  const today = dayjs(date);
  let weekAgo = dayjs(today).subtract(daysBack, "weeks").day(1);

  const calendar = [];
  console.log(weekAgo.startOf('month').format('DD'));
  while (weekAgo.isBefore(today)) {
    const date = weekAgo.format('YYYY-MM-DD')
    const day = weekAgo.day()
    const cell = {
      date,
      day: day || 7,
      count: data[date] || 0 
    };
    if(weekAgo.startOf('month').format('DD') == weekAgo.format('DD')){
      cell.newMonthDay = weekAgo.startOf('month').locale('ru-ru').format('MMM')
    }
    calendar.push(cell);
    weekAgo = weekAgo.add(1, "day");
  }
  return calendar;
};

