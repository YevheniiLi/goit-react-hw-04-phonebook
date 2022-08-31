import styled from 'styled-components';

export const ButtonForm = styled.button`
  cursor: pointer;
  max-width: 120px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px 7px;
  border: 1px solid silver;
  border-radius: 5px;
  font-size: 14px;
  text-transform: capitalize;
  background-color: ${p => p.theme.colors.muted};

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  transition: border-color 1200ms, background-color 1200ms;
  &:hover {
    border-color: rgb(118, 194, 197);
    background-color: ${p => p.theme.colors.lamp};
    box-shadow: 0px 0px 4px 0px rgba(118, 194, 197, 0.7);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(118, 194, 197, 0.7);
    -moz-box-shadow: 0px 0px 4px 0px rgba(118, 194, 197, 0.7);
    transition: border-color 600ms, background-color 600ms, box-shadow 600ms;
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 500;
  padding-top: 20px;
`;
