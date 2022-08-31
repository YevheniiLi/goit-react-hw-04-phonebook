import styled from 'styled-components';

export const InputName = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;
export const InputText = styled.input`
  display: grid;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.none};
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[2]}px;
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.lightgold};
    color: ${p => p.theme.colors.black};
  }
`;
