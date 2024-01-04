import { TitleRowProps } from '@/types/interfaces';
import { MOBILE_WIDTH } from '@/utils/constants';
import React, { FunctionComponent } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  color: #98a6af;
  padding: .3em;
  background-color: #121723;
  
  span {
    min-width: 5rem;
  }
`;

const TitleRow: FunctionComponent<TitleRowProps> = ({reversedFieldsOrder = false, windowWidth}) => {
  return (
    <Container data-testid='title-row'>
      {reversedFieldsOrder || windowWidth < MOBILE_WIDTH ?
        <>
          <span>PRICE</span>
          <span>SIZE</span>
          <span>TOTAL</span>
        </> :
        <>
          <span>TOTAL</span>
          <span>SIZE</span>
          <span>PRICE</span>
        </>}
    </Container>
  );
};

export default TitleRow;