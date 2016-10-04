import moment from 'moment';

const daysById = (totalDays, day) => {
  let days = {
    byId: {},
    allIds: [],
    currentDay: {}
  };

  let currentId = 1;
  while (totalDays >= 0) {
    days['byId'][currentId] =
    {
      id: currentId,
      date: day,
      dateString: day.format('MMM D')
    }
    days['allIds'].push(currentId);
    if (currentId === 1) {
      days['currentDay'] = Object.assign(
        {},
        { id: currentId, date: day, dateString: day.format('MMM D') })
    }
    day = day.clone().add(1, 'days');
    totalDays--;
    currentId++;
  }
  return days;
}

const makeDays = (state = {}, action) => {
  const firstDay = moment(action.startDate, 'M/D/YYYY', true);
  const lastDay = moment(action.endDate, 'M/D/YYYY', true);
  const totalDays = lastDay.diff(firstDay, 'days');
  return daysById(totalDays, firstDay);
}

export default makeDays;
