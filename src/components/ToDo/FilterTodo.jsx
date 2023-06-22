import React from 'react';
import FilterButton from './FilterButton';

const FilterTodo = ({ filter_map, filter, setFilter }) => {
  const filter_names = Object.keys(filter_map); // ['All', 'Active', 'Completed']

  return (
    <div>
      {filter_names.map((name) => (
        <FilterButton name={name} setFilter={setFilter} key={name} />
      ))}
    </div>
  );
};

export default FilterTodo;
