import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`

    border-radius: 5.5px;
    width: 100%;
    height: 2.7rem;
    outline: none;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
    background-color: ${({theme }) => theme.colors.secondary};
    text-transform: uppercase;

    &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};


export default Button;

