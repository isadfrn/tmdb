import theme from '../../styles/theme';

import { useState, useEffect } from 'react';

import { Container, Nav } from './style';
import { MobileMenu } from '../MobileMenu';
import { DesktopMenu } from '../DektopMenu';

export function Navbar() {
  const [screenSize, setScreenSize] = useState({
    matches: window.innerWidth > theme.BREAKPOINTS.LAPTOP ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia(`(min-width: ${theme.BREAKPOINTS.LAPTOP}px)`);
    mediaQuery.addListener(setScreenSize);
    return () => mediaQuery.removeListener(setScreenSize);
  }, []);

  return (
    <Container>
      <Nav>{screenSize && !screenSize.matches ? <MobileMenu /> : <DesktopMenu />}</Nav>
    </Container>
  );
}
