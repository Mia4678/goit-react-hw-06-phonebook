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
import { useSelector } from 'react-redux';
import { selectorContacts, selectorFilter } from '../../redux/selectors';
import { ContactListContainer } from './ContactList.styles';

const ContactList = () => {
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

  return (
    <ContactListContainer>
      {newContArr.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ContactListContainer>
  );
};

export default ContactList;
