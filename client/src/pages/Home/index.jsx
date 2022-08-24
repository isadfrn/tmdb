import { Container, Header } from './style';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <Container>
      <Header>
        <h1>Welcome.</h1>
        <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      </Header>
      <Footer />
    </Container>
  );
}
