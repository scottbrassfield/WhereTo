import * as Actions from '../actions/action-types'
import moment from 'moment'

const initialState = {
  days: [ ]
}

const addDays = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_OVERVIEW: {
      const addDays = (totalDays, currentDay) => {
        let days = [];
        let currentId = 0;
        while (totalDays >= 0) {
          days.push({id: currentId, date: currentDay});
          currentDay = currentDay.clone().add(1, 'days');
          totalDays--;
          currentId++;
        }
        return days;
      }
      const firstDay = moment(action.startDate, 'M/D/YYYY', true);
      const lastDay = moment(action.endDate, 'M/D/YYYY', true);
      const totalDays = lastDay.diff(firstDay, 'days');
      return addDays(totalDays, firstDay);
    }
    default:
      return state;
  }
}

const itinerary = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_OVERVIEW: {
      return Object.assign({}, state,
        {
          destination: action.destination,
          startDate: action.startDate,
          endDate: action.endDate,
          overview: action.complete,
          currentDate: action.startDate,
          days: addDays(undefined, action)
        }
      )
    }
    case Actions.UPDATE_OVERVIEW:
      return Object.assign({}, state, { overview: action.complete })
    default:
      return state;
  }
}

module.exports = itinerary;
