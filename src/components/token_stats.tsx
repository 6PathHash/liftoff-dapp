import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../pages/Launchpad';
import { StyledTable } from '../pages/RocketDetail';
import { TYPE } from '../theme';

const CTA = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  button {
    margin-right: 1rem;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-content: space-between;
  `}
`;

export const TokenStats = () => {
  return (
    <>
      <TYPE.Header>Token Stats</TYPE.Header>
      <StyledTable cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td width="40%">
              <TYPE.Body>Ticker</TYPE.Body>
            </td>
            <td width="60%">
              <TYPE.Body>XYZ</TYPE.Body>
            </td>
          </tr>
        </tbody>
      </StyledTable>

      <TYPE.Body>Claim Token Rewards</TYPE.Body>
      <CTA>
        <StyledButton>Claim</StyledButton>
        <TYPE.Small color="primary1">
          Current available to claim: 0.00 XYZ
        </TYPE.Small>
      </CTA>
    </>
  );
};