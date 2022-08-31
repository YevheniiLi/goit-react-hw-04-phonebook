import { ContactText, ButtonForm } from "./ContactItem.styled"
import PropTypes from 'prop-types'

export const ContactItem = ({id, name, number, onRemoveClick}) => {
    return (
         <ContactItem key={id}>
            <ContactText>{name}: </ContactText>
            <ContactText>{number}</ContactText>
            <ButtonForm type="button" onClick={() => onRemoveClick(id)}>
              Delete
            </ButtonForm>
          </ContactItem>
    )
}


ContactItem.propTypes ={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, 
} 