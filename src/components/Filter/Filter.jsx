// import React from 'react';
// import { Label, Input } from '../ContactForm/ContactForm.styles';

// function Filter({ filter, onFilterChange }) {
//   const handleChange = e => {
//     const filterValue = e.target.value.toLowerCase();
//     onFilterChange(filterValue);
//   };

//   return (
//     <div>
//       <Label>
//         Filter contacts by name:
//         <Input type="text" value={filter} onChange={handleChange} />
//       </Label>
//     </div>
//   );
// }

// export default Filter;

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
