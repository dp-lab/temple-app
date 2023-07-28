export const fetchTemples = () => (dispatch) => {
    // In a real-world app, this would make a fetch request to an API
    // We're simulating a delay with setTimeout
    setTimeout(() => {
        const temples = [
            { id: 1, name: "Temple 1" },
            { id: 2, name: "Temple 2" },
            // more temples
        ];
        dispatch({ type: "FETCH_TEMPLES", payload: temples });
    }, 2000);
};
