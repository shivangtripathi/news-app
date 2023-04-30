export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavourites = news => ({
  type: ADD_TO_FAVOURITES,
  payload: {
    news
  }
});


export const removeFromFavourites = news => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: {
      news
    }
  });
