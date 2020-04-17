export const showDetail = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return action.id;
    default:
      return state;
  }
};