export const fetchTemples = () => (dispatch) => {
    setTimeout(() => {
        const temples = [
            {
                id: 1,
                name: "Temple of Dawn",
                deity: "Buddha",
                address: "Bangkok, Thailand",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                id: 2,
                name: "Sri Venkateswara Temple",
                deity: "Vishnu",
                address: "Tirumala, Andhra Pradesh, India",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                id: 3,
                name: "Pura Ulun Danu Bratan",
                deity: "Shiva",
                address: "Bali, Indonesia",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                id: 4,
                name: "Kinkaku-ji",
                deity: "Avalokitesvara",
                address: "Kyoto, Japan",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                id: 5,
                name: "Temple of Heaven",
                deity: "Heaven Worship",
                address: "Beijing, China",
                imageUrl: "https://via.placeholder.com/150",
            },
        ];

        dispatch({ type: "FETCH_TEMPLES", payload: temples });
    }, 1000);
};
