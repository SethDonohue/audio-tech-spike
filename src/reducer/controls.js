
const initialState = { playing: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'PLAY_ALL': {
      const updatedState = { ...state, playing: true };
      return updatedState;
    }
    default:
      return state;
  }
}