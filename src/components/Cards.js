import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';
import Spinner from 'react-bootstrap/Spinner';

const Cards = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    console.log(data)
    console.log(loading)
    return (
        <div>
            {loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                    </Spinner>
                </div>
            )}

            {error && <p>Error: {error}</p>}

            {!loading && data.length > 0 && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}

            {!loading && data.length === 0 && !error && <p>No data available</p>}
        </div>
    );
};

export default Cards;
