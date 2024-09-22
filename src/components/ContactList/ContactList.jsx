import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css"
import { selectFilteredContacts } from '../../redux/contacts/contactsSelector';

export default function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => 
        <li className={css.item} key={contact.id}> 
          <Contact data={contact} />
        </li> )}
    </ul>
    </div>
  );
}