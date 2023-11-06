import React, { useState } from 'react';
import { FilterWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice'; 

export const Filter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const changeInput = input => {
    setFilter(input.value);

    dispatch(filterContacts(input.value));
  };
  return (
    <FilterWrap>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={e => changeInput(e.target)}
      />
    </FilterWrap>
  );
};
