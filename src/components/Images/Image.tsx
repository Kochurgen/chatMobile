import styled from 'styled-components/native';

export default styled.Image`
  height: ${(props: any) => (props.height ? props.height + 'px' : '100%')};
  width: ${(props: any) => (props.width ? props.width + 'px' : '100%')};
  resize-mode: contain;
`;
