import styled from 'styled-components';

const aditionalColor = '#fcb577 ';
const shadowColor = 'rgba(165, 140, 100, 0.25)';

export const ContactListContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 5px;
  background-color: #dda0dd;
`;

export const DeleteBtn = styled('button')({
  width: 90,
  height: 30,
  transition: 'boxShadow, easy, 300ms; backgroundColor, easy, 300ms',
  cursor: 'pointer',
  borderRadius: 10,
  border: `0.5px solid ${aditionalColor}`,
  backgroundColor: aditionalColor,
  marginLeft: '15px',

  '&:hover, &:focus': {
    boxShadow: `0px 10px 30px 0px ${shadowColor}`,
    backgroundColor: '#e89e5d',
  },

  '&:active': {
    backgroundColor: '#965821',
  },
});

export const List = styled('ul')({
  margin: 0,
  padding: 0,
  paddingBottom: '10px',
  listStyle: 'none',
  textDecoration: 'none',
});
