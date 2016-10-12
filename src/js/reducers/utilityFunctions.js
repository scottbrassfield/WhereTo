import moment from 'moment'

export const getTripDates = (state = [], action) => {
  let firstDay = moment(action.startDate, 'M/D/YYYY', true);
  let lastDay = moment(action.endDate, 'M/D/YYYY', true);
  let totalDays = lastDay.diff(firstDay, 'days');

  let day = firstDay.clone();
  while (totalDays >= 0) {
    state.push(day);
    day = day.clone().add(1, 'days');
    totalDays--;
  }
  return state;
}


export const startTrip = (state = {}, action) => {
  let dates = getTripDates(undefined, action);
  dates.forEach((date, index) => {
    state[index] = { id: index, date, plans: [] };
  })
  return state;
}

export const addId = (ids, id) => {
  return [ ...ids, id];
}

export const updatePlanIds = (byId, action) => {
  let day = byId[action.id];
  let planIds = day.plans || [];
  return {...day, plans: addPlanId(planIds, action) };
}

const addPlanId = (planIds, action) => {
  return [...planIds, action.planId];
}

export const lodgingDays = (state = [], action) => {
  let lodgingDates = getTripDates(undefined, action);
  let days = [];
  lodgingDates.forEach((lodgingDate) => {
    action.tripDates.forEach((tripDate, index) => {
      if (lodgingDate.isSame(tripDate)) {
        days.push(index)
      }
    })
  })
  return days;
}
