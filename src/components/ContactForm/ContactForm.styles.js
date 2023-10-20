import styled from 'styled-components';

export const Label = styled('div')({
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  marginBottom: 20,
});

export const Input = styled('input')({
  height: 34,
  border: `0.5px solid `,
  borderRadius: 10,
  padding: 8,
  fontSize: 16,
  transition: 'boxShadow, easy, 300ms',

  '&:hover': {
    boxShadow: `0px 10px 30px 0px `,
  },
});

export const Button = styled('button')({
  width: '100%',
  height: 44,
  fontSize: 16,
  fontWeight: 600,
  transition: 'boxShadow, easy, 300ms; backgroundColor, easy, 300ms',
  cursor: 'pointer',
  borderRadius: 10,

  marginBottom: 20,

  '&:hover, &:focus': {
    boxShadow: `0px 10px 30px 0px `,
    backgroundColor: '#e89e5d',
  },

  '&:active': {
    backgroundColor: '#965821',
  },
});
