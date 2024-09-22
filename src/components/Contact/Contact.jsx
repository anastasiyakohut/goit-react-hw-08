import css from './Contact.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    
    return (
        <div className={css.container}>
                <div>
                    <p className={css.userInfo}><IoPerson className={css.icon} />{name}</p>
                    <p className={css.userInfo}><FaPhone className={css.icon} />{number}</p>
                </div>
                <button type="button" className={css.delBtn} onClick={handleDelete}>Delete</button>
        </div>
    )
}