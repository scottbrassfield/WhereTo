import {
  SHOW_MODAL
} from '../actions/actionTypes'

const initialState = {
  modalType: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return { modalType: action.modal }
    default:
      return state
  }
}
