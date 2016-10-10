import moment from 'moment'

export const startTrip = (state = {}, action) => {
  let firstDay = moment(action.startDate, 'M/D/YYYY', true);
  let lastDay = moment(action.endDate, 'M/D/YYYY', true);
  let totalDays = lastDay.diff(firstDay, 'days');

  let day = firstDay.clone();
  let currentId = 0;

  while (totalDays >= 0) {
    state[currentId] = { id: currentId, date: day, plans: [] }
    day = day.clone().add(1, 'days');
    totalDays--;
    currentId++;
  }
  return state;
}

export const addId = (ids, id) => {
  return [ ...ids, id]
}

export const updatePlanIds = (byId, action) => {
  let day = byId[action.id];
  let planIds = day.plans || [];
  return {...day, plans: addPlanId(planIds, action) }
}

const addPlanId = (planIds, action) => {
  return [...planIds, action.planId]
}

export const lodgingDays = (state = [], { nights, dayId }) => {
  nights = parseInt(nights)
  while (nights > 0) {
    state = state.concat(dayId)
    dayId++
    nights--
  }
  return state
}

export const updateLodgingDays = (state = [], { nights, dayId }) => {
  
}
