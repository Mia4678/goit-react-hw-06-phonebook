

import React from 'react';

import { ContactName, ContactNumber, DeleteBtn } from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

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
