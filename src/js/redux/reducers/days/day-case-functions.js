import moment from 'moment';

export const startTrip = (state = {}, action) => {
    let firstDay = moment(action.startDate, 'M/D/YYYY', true);
    let lastDay = moment(action.endDate, 'M/D/YYYY', true);
    let totalDays = lastDay.diff(firstDay, 'days');

    let day = firstDay.clone();
    let currentId = 1;

    while (totalDays >= 0) {
      state[currentId] = { id: currentId, date: day }
      day = day.clone().add(1, 'days');
      totalDays--;
      currentId++;
    }
    return state;
  }

export const addLodging = (state, action) => {
  let day = getCurrentDay(state);
  return Object.assign({}, day, {lodging: action.lodging})
}

  export const getCurrentDay = ({ entities: { days }, currentDay }) => {
    return days.byId[currentDay]
  }
