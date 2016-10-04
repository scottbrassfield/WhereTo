import * as Actions from './action-types';

export const addOverview = (destination, startDate, endDate, complete) => {
  return {
      type: Actions.ADD_OVERVIEW,
      destination,
      startDate,
      endDate,
      complete
  }
}

export const updateOverview = (complete) => {
  return {
      type: Actions.UPDATE_OVERVIEW,
      complete
  }
}

export const addLodging = (id, lodging, nights) => {
  return {
    type: Actions.ADD_LODGING,
    id,
    lodging,
    nights
  }
}
