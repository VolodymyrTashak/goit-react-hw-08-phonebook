import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/slices/filterSlice';

import { FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onFilter} />
    </FilterLabel>
  );
};
