import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm() {
    const idName = useId();
    const idNumber = useId();

    const userValidationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Minimun 3 letters")
            .max(50, "Maximum 50 letters")
            .required("Required"),
        number: Yup.string()
            .min(9, "Please enter your phone number.")
            .max(13, "Too long!")
            .required("Required"),
    });

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const newContact = {
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                id: "",
                name: "",
                number: "",
            }}
            onSubmit = {handleSubmit}
            validationSchema={userValidationSchema}
        >
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor={`name-${idName}`}>Name</label>
                    <Field className={css.input} type="text" name="name" id={`name-${idName}`}/>
                    <ErrorMessage
                        className={css.error}
                        name="name"
                        component="span"
                    />
                </div>
                
                <div className={css.formGroup}>
                    <label htmlFor={`number-${idNumber}`}>Number</label>
                    <Field className={css.input} type="tel" name="number" id={`number-${idNumber}`}/>
                    <ErrorMessage
                        className={css.error}
                        name="number"
                        component="span" />
                </div>

                <button type="submit" className={css.addBtn}>Add contact</button>
            </Form>
        </Formik>
    )    
}