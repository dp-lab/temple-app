const templeReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_TEMPLES":
            return action.payload;
        default:
            return state;
    }
};

export default templeReducer;
