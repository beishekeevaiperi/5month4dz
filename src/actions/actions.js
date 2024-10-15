export const fetchData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
        const response = await fetch('https://api.attackontitanapi.com/characters');
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.results });
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
    }
};
