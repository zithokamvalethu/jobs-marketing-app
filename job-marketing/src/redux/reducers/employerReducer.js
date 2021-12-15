const initialState = {
  jobs: [],
};

export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.value, action.payload],
      };
    default:
      return state;
  }
};
