import styled from 'styled-components'
 
const Button = styled.button`
  color: ${props => props.theme.text1};
  border: 2px solid ${props => props.theme.fieldHighlight};
  background: ${props => props.theme.fieldBg1};

  font-family: ${props => props.theme.font};
  font-size: 1em;

  cursor: pointer;

  :disabled{
    color: ${props => props.theme.fieldDisabled};
    border: 2px solid ${props => props.theme.fieldDisabled};
  }
`;

export default Button;