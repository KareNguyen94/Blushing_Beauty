export const showMakeupDetail = (id) => ({
  type: "SHOW_DETAIL",
  id: id
});

export const getMakeup = (makeup) => ({
  type: "GET_MAKEUP",
  makeup: makeup,
});