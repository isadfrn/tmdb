import logoG from '../../assets/img/logo-g.svg';

import { Container, Icons } from './style';

export function DesktopMenu() {
  return (
    <Container>
      <img src={logoG} alt="" />
      <Icons>
        <a href="#">
          <strong>Movies</strong>
        </a>
        <a href="#">
          <strong>TV Shows</strong>
        </a>
        <a href="#">Login</a>
        <a href="#">Join TMDB</a>
      </Icons>
    </Container>
  );
}
