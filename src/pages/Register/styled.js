import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 8px;
    border-radius: 8px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
