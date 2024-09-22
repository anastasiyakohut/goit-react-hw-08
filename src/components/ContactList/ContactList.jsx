import { useSelector } from "react-redux";
import Contact from '../Contact/Contact'
import { selectVisibleContacts } from "../../redux/contactsSlice";
import css from './ContactList.module.css'

export default function ContactList() {

    const filteredContacts = useSelector(selectVisibleContacts);
    console.log(filteredContacts);
    
    return (
        <ul className={css.container}>
            {filteredContacts.map((contact) => {
                return (
                    <li key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    </li>
                );
            })}
        </ul>
    )
}