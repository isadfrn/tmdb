import searchBkg from '../../assets/img/search-bkg.svg';
import joinBkg from '../../assets/img/join-bkg.svg';
import styled from 'styled-components';

export const Container = styled.div``;

export const WelcomeHeader = styled.header`
  width: 100%;
  height: 40rem;
  background-image: url(${searchBkg});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  padding: 12rem 2rem;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
  }
`;

export const JoinHeader = styled.header`
  width: 100%;

  background-image: url(${joinBkg});
  background-size: cover;
  background-repeat: no-repeat;

  color: ${({ theme }) => theme.COLORS.WHITE_500};
  padding: 6rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-size: 6rem;
  }

  p {
    font-size: 1.6rem;
    text-align: justify;
    padding-bottom: 1rem;
  }

  i {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
    color: ${({ theme }) => theme.COLORS.WHITE_500};

    width: 8rem;

    border: none;
    border-radius: 0.5rem;

    font-weight: 700;
    font-size: 1.4rem;

    padding: 1rem;
  }

  ul {
    font-size: 1.6rem;
    padding: 0 2rem;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    div {
      width: 40rem;
    }
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
