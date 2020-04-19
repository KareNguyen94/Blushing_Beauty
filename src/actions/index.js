export const showMakeupDetail = (id) => ({
  type: "SHOW_DETAIL",
  id: id
});

export const getMakeup = (makeup) => ({
  type: "GET_MAKEUP",
  makeup: makeup
});

export const addFavoriteProduct = (makeup) => ({
  type: "ADD_FAVORITE",
  makeup
});

export const removeFavoriteProduct = (makeup) => ({
  type: "REMOVE_FAVORITE",
  makeup
});