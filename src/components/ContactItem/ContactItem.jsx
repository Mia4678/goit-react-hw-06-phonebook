// import React from 'react';
// import {
//   ContactItemContainer,
//   ContactInfo,
//   ContactName,
//   DeleteButton,
//   ContactNumber,
// } from './ContactItem.styles';

// function ContactItem({ contact, onDeleteContact }) {
//   const handleDelete = () => {
//     onDeleteContact(contact.id);
//   };

//   return (
//     <ContactItemContainer>
//       <ContactInfo>
//         <ContactName>Name: {contact.name}</ContactName>
//         <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
//       </ContactInfo>
//       <ContactNumber>Phone: {contact.number}</ContactNumber>
//     </ContactItemContainer>
//   );
// }

// export default ContactItem;

import React from 'react';

import { ContactName, ContactNumber, DeleteBtn } from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  // delete
  // const handleDelete = id => {
  //   dispatch(deleteContact(id));
  // };
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li style={{ marginBottom: 20 }}>
      <ContactName>{item.contactName}</ContactName>
      <ContactNumber>{item.number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => handleDelete(item.id)}>
        ✖ Delete
      </DeleteBtn>
    </li>
  );
};

export default ContactItem;
