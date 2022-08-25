import logoS from '../../assets/img/logo-s.svg';

import { useState } from 'react';
import { FiMenu, FiUser, FiX } from 'react-icons/fi';

import { Container, Icons, MenuBody } from './style';

export function MobileMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function handleOpenMenu() {
    if (openMobileMenu === true) {
      setOpenMobileMenu(false);
    } else {
      setOpenMobileMenu(true);
    }
  }

  function MobileMenuOpen() {
    return (
      <MenuBody>
        <button onClick={handleOpenMenu}>
          <FiX />
        </button>
        <a href="#">
          <strong>Movies</strong>
        </a>
        <a href="#">
          <strong>TV Shows</strong>
        </a>
        <a href="#">Login</a>
        <a href="#">Join TMDB</a>
      </MenuBody>
    );
  }

  return (
    <Container onClick={handleOpenMenu}>
      <Icons>
        <button>
          <FiMenu onClick={handleOpenMenu} />
        </button>
        <a href="">
          <img src={logoS} alt="" />
        </a>
        <button>
          <FiUser />
        </button>
      </Icons>
      {openMobileMenu && <MobileMenuOpen />}
    </Container>
  );
}
