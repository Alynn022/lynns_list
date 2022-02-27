import styled from 'styled-components';

export const Wrapper = styled.div`
  // position: relative;
`;

export const ActivatorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 5%;
  font-weight: 600;
  font-size: 1.5em;
  color: #F2F2F2;
  cursor: pointer;
  background-color: #093b48;
  border-radius: 0.2em;
  min-width: 100%;

  &:after {
    content: '';
    border-bottom: 1px solid #F2F2F2;
    border-right: 1px solid #F2F2F2;
    height: 0.5em;
    margin-left: 0.75em;
    width: 0.5em;
    transform: rotate(45deg);
  }
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  display: ${props => (props.active ? 'block' : 'none')};
  background-color: #abdcdf;
  color: #062932;
  font-size: 1.5em;
  margin: 0;
  min-width: 100%;
  padding: 0;
  position: absolute;
  border-radius: 0.2em;
  li {
    list-style: none;
    margin: 0;
    a,
    a:link {
      display: block;
      padding: 0.5em;
      color: #093b48;
      &:hover {
        background-color: #093b48;
        color: #f2f2f2;
      }
    }
  }
`;
