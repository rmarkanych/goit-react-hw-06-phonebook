import Title from 'components/Title/Title';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <input
          type="text"
          onChange={e => dispatch(setStatusFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;
