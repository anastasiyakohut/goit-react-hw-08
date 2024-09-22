import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectError, selectLoading } from '../../redux/contactsSlice'
import { fetchContacts } from '../../redux/contactsOps'

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Please wait</p>}
      {isError && <p>Something went wrong! Please try again.</p>}
      <ContactList/>
    </div>
  )
}