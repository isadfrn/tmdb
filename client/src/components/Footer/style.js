import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
  color: ${({ theme }) => theme.COLORS.WHITE_500};

  padding: 3rem 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: left;

  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const JoinTMDB = styled.button`
  background-color: ${({ theme }) => theme.COLORS.WHITE_500};
  color: ${({ theme }) => theme.COLORS.BLUE_500};
  width: 25rem;

  border: none;
  border-radius: 0.5rem;

  font-weight: 700;
  font-size: 1.6rem;

  padding: 1rem;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    align-items: center;
  }
`;

export const Links = styled.div`
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
`;
