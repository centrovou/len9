export const initialState = {
  setCartItems: [],
  cartItems: [], //отоброжение картчек в корзине
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ON_REMOVE_CART':
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
      return { ...state, cartItems: updatedCartItems };

    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case 'SET_CART_ITEMS':
      return { ...state, setCartItems: action.payload };
    default:
      return state;
  }
};
