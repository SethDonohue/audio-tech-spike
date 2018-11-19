
const initialState = { masterVolume: 100 };

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case 'VOLUME_CHANGE': {
      const updatedState = { ...state, masterVolume: payload };
      return updatedState;
    }
    default : 
      return state;
  }
}