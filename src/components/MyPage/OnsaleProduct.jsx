import React from 'react';
import styled from 'styled-components';

const OnsaleProductContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  display: flex;
`;

const Image = styled.img``;

export function OnsaleProduct(id, name, price, options) {
  return (
    <OnsaleProductContainer>
      {/* <Image src={options[0].urls[0]} alt="" /> */}
    </OnsaleProductContainer>
  );
}
