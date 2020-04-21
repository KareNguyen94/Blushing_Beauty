export const color = (state = 'fav-button2', action) => {
  switch(action.type){
    case 'CHANGE_COLOR': 
      return action.className;
    default:
      return state
  }
};