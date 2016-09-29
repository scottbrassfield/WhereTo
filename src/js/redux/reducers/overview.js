const overview = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DEST':
      return Object.assign({}, state, {destination: action.value});
    case 'ADD_DATES':
      return Object.assign({}, state, {begin: action.begin, end: action.end});
    default:
      return state;
  }
}

module.exports = overview;
