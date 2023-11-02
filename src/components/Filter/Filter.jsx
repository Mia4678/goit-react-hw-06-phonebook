

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
