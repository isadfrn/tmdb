import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 25.2rem;
  margin-bottom: 10rem;

  img {
    border-radius: 0.8rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Votes = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK_500};
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  text-align: center;

  display: flex;

  font-size: 2rem;
  font-weight: 700;

  border-radius: 50%;

  padding: 0.2rem;
  width: 4rem;

  position: relative;
  top: -2rem;
  left: 1rem;

  span {
    font-size: 1rem;
    position: relative;
    bottom: 0.8rem;
  }
`;

export const PositiveVote = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.COLORS.GREEN_600};
  border-radius: 50%;
  width: 4rem;
`;

export const NeutralVote = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.COLORS.YELLOW_500};
  border-radius: 50%;
  width: 4rem;
`;

export const NegativeVote = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.COLORS.RED_500};
  border-radius: 50%;
  width: 4rem;
`;

export const NoVote = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.COLORS.WHITE_500};
  border-radius: 50%;
  width: 4rem;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.8rem;
    line-height: 1.8rem;
    word-wrap: break-word;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE_500};
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 100;
  }
`;
