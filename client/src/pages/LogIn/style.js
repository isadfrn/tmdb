import styled from 'styled-components';

export const Container = styled.div``;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
    padding: 1rem 0;
    text-align: justify;

    a {
      color: ${({ theme }) => theme.COLORS.BLUE_500};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  button {
    padding: 0.8rem 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-weight: 700;
    border: none;
    border-radius: 0.6rem;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    height: calc(100vh - 27rem);
  }
`;

export const InputWrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
`;
