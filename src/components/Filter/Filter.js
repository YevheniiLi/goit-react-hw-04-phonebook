import { InputName, InputText } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <InputName>
        Find contacts
        <InputText type="text" value={value} onChange={onChange} />
      </InputName>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
