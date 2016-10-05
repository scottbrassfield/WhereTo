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
  let day = state[action.id];
  return Object.assign({}, day, {lodging: action.lodging})
}

export const updatePlanIds = (byId, action) => {
  let day = byId[action.id];
  let planIds = day.plans || [];
  return Object.assign({}, day, {plans: addPlanId(planIds, action)} )
}

const addPlanId = (planIds, action) => {
  return planIds.concat(action.planId)
}
