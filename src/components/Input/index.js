import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`


border-radius: 5px;
  height: 2.7rem;
  width: 100%;
  border: ${({theme }) => theme.colors.primary} solid 1px;
  background:none;
  color: white;
  outline: 0;


`

export default function Input({onChange, placeholder, ...props}){
  return (
<div>
    <InputBase onChange = {onChange}
        placeholder={placeholder}
   {...props}
    />
</div>

  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
placeholder: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
value: PropTypes.string.isRequired,

};
