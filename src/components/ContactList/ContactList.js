import { Box } from 'components/Box';
import { ContactItem, ContactText } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ButtonForm } from 'components/ContactForm/ContactForm.styyled';

export const ContactList = ({ contacts, onRemoveClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Box as="li" mb={3} key={id}>
          <ContactItem key={id}>
            <ContactText>{name}: </ContactText>
            <ContactText>{number}</ContactText>
            <ButtonForm type="button" onClick={() => onRemoveClick(id)}>
              Delete
            </ButtonForm>
          </ContactItem>
        </Box>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveClick: PropTypes.func.isRequired,
};
