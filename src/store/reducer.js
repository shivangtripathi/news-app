import { ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES } from '../actions/action';

const initialState = {
  favourites: []
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES: {
      return {
        ...state,
        favourites: [ ...state.favourites, { ...action.payload.news.item}]
      };
    }
    case REMOVE_FROM_FAVOURITES: {
        let newFavourites = state.favourites.filter((itm)=>itm._id!=action.payload.news.item._id);
      return {
        ...state,
        favourites: [ ...newFavourites]
      };
    }
    default:
      return state;
  }
}

export default favouritesReducer;