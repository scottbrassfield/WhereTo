import moment from 'moment';
//
// const initialState = {
//   byId: {},
//   allIds: []
// }

const makeDays = (state = {}, action) => {
  const firstDay = moment(action.startDate, 'M/D/YYYY', true);
  const lastDay = moment(action.endDate, 'M/D/YYYY', true);
  const totalDays = lastDay.diff(firstDay, 'days');
  const addDays = (totalDays, currentDay) => {
    let days = {
      byId: {},
      allIds: []
    };
    let currentId = 1;
    while (totalDays >= 0) {
      days['byId'][currentId] = { id: currentId, date: currentDay }
      currentDay = currentDay.clone().add(1, 'days');
      totalDays--;
      currentId++;
    }
    return days;
  }
  return addDays(totalDays, firstDay);
}


export default makeDays;
