

import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './Display.css';

const initialState = {
  loading: true,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

const fetchData = async (selectedRoute, selectedNumber, dispatch) => {
  const url = `https://jsonplaceholder.typicode.com/${selectedRoute}${selectedNumber ? `/${selectedNumber}` : ''}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    // .jsconsole.log(response.data);
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error.message });
  }
};

const ApiData = ({ selectedRoute, selectedNumber }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' });
    fetchData(selectedRoute, selectedNumber, dispatch);
  }, [selectedRoute, selectedNumber]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div>
      <h2>{selectedRoute.toUpperCase()}</h2>
      {state.data &&
        state.data.map((item) => (
          <div key={item.id}>
            <p>
              {selectedRoute.slice(0, -1).toUpperCase()} {item.id} by User {item.userId}
            </p>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default ApiData;









