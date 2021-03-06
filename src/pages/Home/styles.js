import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background-color: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError === true ? '2px solid #F00' : '0')};
    /* styled components allows the const to use the element's properties */
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #52d89f;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #64f5b8;
      cursor: pointer;
    }
  }
`;
