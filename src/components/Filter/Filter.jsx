import { useDispatch } from 'react-redux';
import { filterList } from 'redux/contacts/filterSlice';
import { Forms, Inputs, Labels} from './Filter.styled';
function Filter() {
  const dispatch = useDispatch();

  const handleСhange = e => {
    const { value } = e.target;
    dispatch(filterList(value));
  };

  return (
    <Forms>
      <Labels htmlFor="">
        find contacts by name
        <Inputs
          onChange={handleСhange}
          type="text"
          name="query"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Labels>
    </Forms>
  );
}

export default Filter;
