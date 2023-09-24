import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const Container = styled.div``;
const Item = styled.span`
  height: 34px;
  border-radius: 40px;

  background-color: ${basic.gray1};

  padding: 2px 14px;
  margin-right: 8px;
  margin-top: 6px;
  margin-bottom: 6px;

  white-space: nowrap;

  > span:last-child {
    width: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const PopularStockUI = {
  Container,
  Item,
} as const;