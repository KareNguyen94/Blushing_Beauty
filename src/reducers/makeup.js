export const makeup = (state = [], action) => {
  switch (action.type) {
    case "GET_MAKEUP":
      return action.makeup;
    default:
      return state;
  }
};
