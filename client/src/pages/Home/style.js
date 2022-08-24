import searchBkg from '../../assets/img/search-bkg.svg';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 30rem;
  background-image: url(${searchBkg});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  padding: 6rem 2rem;

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
  }
`;
