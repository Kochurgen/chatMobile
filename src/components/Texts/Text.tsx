import styled from 'styled-components/native';

export default styled.Text`
  color: ${(props: any) => (props.color? props.color: 'black')};
`;
