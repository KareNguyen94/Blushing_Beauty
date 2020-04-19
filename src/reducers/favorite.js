export const favorite = (state = [], action) => {

  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.makeup];
    case "REMOVE_FAVORITE":
      return state.filter(makeup => makeup.id !== action.makeup.id);
    default: 
      return state;
  };
};