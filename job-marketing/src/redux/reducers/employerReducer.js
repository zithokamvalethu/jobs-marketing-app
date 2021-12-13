const initialState = {
  jobs: [],
};

export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    default:
      return state;
  }
};
