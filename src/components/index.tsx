import { Text } from '@gsandf/ui';
import styled from 'styled-components';

export const Definition = styled(Text).attrs({ as: 'dd' })`
  margin: 0;
`;

export const Term = styled(Text).attrs({ as: 'dt' })`
  font-weight: bold;
`;
