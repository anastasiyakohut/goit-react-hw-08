import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContacts, editContact } from '../../redux/contacts/contactsOps';
import { openDeleteModal, closeDeleteModal, openEditModal, closeEditModal } from '../../redux/contacts/contactsSlice';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditContactModal from '../EditContactModal/EditContactModal';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const { deleteModalOpen, editModalOpen, currentContact } = useSelector((state) => state.contacts);

  const handleOpenDeleteModal = () => dispatch(openDeleteModal({ id, name, number }));
  const handleCloseDeleteModal = () => dispatch(closeDeleteModal());
  
  const handleOpenEditModal = () => dispatch(openEditModal({ id, name, number }));
  const handleCloseEditModal = () => dispatch(closeEditModal());

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id));
    handleCloseDeleteModal();
  };

  const handleEditContact = (values) => {
  const updatedData = { name: values.name, number: values.phone };
  dispatch(editContact({ contactsId: id, updatedData }));
  handleCloseEditModal();
};

  return (
    <div className={css.contactContainer}>
      <div className={css.title}>
        <p className={css.userName}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <div className={css.separator} />
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.editBtn} onClick={handleOpenEditModal}>
          Edit
        </button>
        <button className={css.btn} onClick={handleOpenDeleteModal}>
          Delete
        </button>
      </div>
      {deleteModalOpen && currentContact.id === id && (
        <DeleteModal 
          open={deleteModalOpen} 
          handleClose={handleCloseDeleteModal} 
          handleDelete={handleDeleteContact} 
        />
      )}
      {editModalOpen && currentContact.id === id && (
        <EditContactModal 
          open={editModalOpen} 
          handleClose={handleCloseEditModal} 
          handleSave={handleEditContact} 
          initialValues={{ name: currentContact.name, phone: currentContact.number }} 
        />
      )}
    </div>
  );
}