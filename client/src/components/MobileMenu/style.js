import styled from 'styled-components';

export const Container = styled.div``;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5.5rem;
    height: 4rem;
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 2.2rem;
  }
`;

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BLUE_800};
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  opacity: 98%;
  font-size: 2rem;

  width: 60%;
  height: 100vh;
  padding: 8rem 2rem;

  position: absolute;
  top: 0;
  left: 0rem;
  z-index: 1;
  overflow: hidden;

  animation-name: slide;
  animation-duration: 600ms;
  transition: all 600ms ease-in;

  > a {
    padding-bottom: 1rem;
  }

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 2.5rem;
    position: absolute;
    top: 2rem;
  }

  @keyframes slide {
    0% {
      left: -40rem;
    }

    100% {
      left: 0rem;
    }
  }
`;
