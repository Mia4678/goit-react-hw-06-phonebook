// import React from 'react';
// import ContactItem from '../ContactItem/ContactItem';
// import { ContactListContainer } from './ContactList.styles';

// function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ContactListContainer>
//       {contacts.map(contact => (
//         <ContactItem
//           key={contact.id}
//           contact={contact}
//           onDeleteContact={onDeleteContact}
//         />
//       ))}
//     </ContactListContainer>
//   );
// }

// export default ContactList;

import React from 'react';
// import ContactItem from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectorContacts, selectorFilter } from '../../redux/selectors';
import { ContactListContainer, List, DeleteBtn } from './ContactList.styles';
import { deleteContact } from '../../redux/slice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const filteredContacts = () => {
    if (filter) {
      const filtered = contacts.filter(one =>
        one.contactName.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    } else return contacts;
  };

  const newContArr = filteredContacts();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id)); // Викликаємо дію для видалення контакту за його id
  };

  return (
    <ContactListContainer>
      {newContArr.map(contact => (
        <List key={contact.id}>
          {contact.contactName}: {contact.number}
          <DeleteBtn
            className="DeleteBtn"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteBtn>
        </List>
      ))}
    </ContactListContainer>
  );
};

export default ContactList;
