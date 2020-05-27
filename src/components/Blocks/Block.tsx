import styled from 'styled-components/native';

export default styled.View`
  height: ${(props: any) => (props.height ? props.height : '100%')};
  width: ${(props: any) => (props.width ? props.width : '100%')};
`;
