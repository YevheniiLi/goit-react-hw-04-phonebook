import { ButtonForm, LabelStyle } from './ContactForm.styyled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

// Создание формы с библиотекой Formik

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(4).required(),
});

export const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <LabelStyle htmlFor="name">
            Name :
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </LabelStyle>

          <LabelStyle htmlFor="number">
            Tel :
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
            <ButtonForm type="submit">Add contact</ButtonForm>
          </LabelStyle>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes ={
  onSubmit: PropTypes.func.isRequired,
}


// Контролируемая форма



// import { Component } from 'react';
// import { nanoid } from "nanoid"

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();

//   };

// reset = () => {
//     this.setState({
//         name: '',
//         number: '',
//     })
// }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//             Name
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           id={this.nameInputId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
// </label>
//         <label htmlFor={this.numberInputId}>
//             Number
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleChange}
//           id={this.numberInputId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit">Add contact</button>
//         </label>
//       </form>
//     );
//   }
// }