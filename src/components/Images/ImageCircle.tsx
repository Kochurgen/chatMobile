import styled from 'styled-components/native';
import Image from './Image';

export default styled(Image)`
  border-radius: ${(props: any) => props.width / 2}px;
`;
