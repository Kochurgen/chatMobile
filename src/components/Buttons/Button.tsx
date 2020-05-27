import styled from 'styled-components/native';

export default styled.TouchableOpacity`
  width: ${(props: any) => (props.width ? props.width : '100%')};
  height: ${(props: any) => (props.height ? props.height : '100%')};
  background-color: '#DDDDDD';
`;
