
import React from 'react';

const Routes = ({ selectedRoute, handleRouteChange }) => {
  return (
    <select value={selectedRoute} onChange={handleRouteChange}>
      <option value="posts">Posts</option>
      <option value="todos">Todos</option>
      <option value="users">Users</option>
    </select>
  );
};

export default Routes;