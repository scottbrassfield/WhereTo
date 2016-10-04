var React = require('react');
var ReactDOM = require('react-dom');

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementByID('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

const TheMap = () => {
  return (
    <div>
      <h1>Locations</h1>
      <div id='map'></div>
    </div>
  )
}

module.exports = TheMap



//synchronous dispatch
const myAction = {
  type: 'TYPE_NAME',
  payload: '...some data'
}

dispatch(myAction)


//asynchronous action
const doMyAction = (dispatch, getState) => {
  //do some async stuff
  //.then()
  fetch('/api/beers')
    .then(res => res.json())
    .then(beers => {
      dispatch({type: 'BEERS_LOADED', payload: beers})
    })

/*can't just do dispatch(myAction) because this is a function,
and dispatch wants an Object*/

//redux-thunk allows us to dispatch functions
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)



//can use action creators for thunk

const getThatBeer = id => (dispatch, getState) =>
  fetch('/api/beers/' + id)
    .then(res => res.json())
    .then(beer=> dispatch(gotTheBeer(beer)))
