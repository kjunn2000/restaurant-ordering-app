const initialState = {
  mainMenu: [],
  sideDishes: [],
  drinks: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MENU":
      return action.menu;
    default:
      return state;
  }
};

export default menuReducer;
