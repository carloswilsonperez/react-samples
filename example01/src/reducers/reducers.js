/**
 * Created by carlos wilson on 6/29/2017.
 */
export default function itemReducer(state = [], action) {
  switch(action.type) {
    case: 'CREATE-ITEM':
      return [...state, Object.assign({}, action.item)];
    default:
      return state;
  }
}
