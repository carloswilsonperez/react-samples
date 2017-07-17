/**
 * Created by carlos wilson on 6/29/2017.
 */
export default function itemReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_ITEM':
      return [...state, Object.assign({}, action.item)];
      //return [{name: "Rodrigo"}];
    default:
      return state;
  }
}
