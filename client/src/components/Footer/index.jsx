import { Container, JoinTMDB, Links } from './style';

export function Footer() {
  return (
    <Container>
      <JoinTMDB>Join the community</JoinTMDB>
      <Links>
        <strong>The basics</strong>
        <a href="https://www.themoviedb.org/about">About TMDB</a>
        <a href="https://www.themoviedb.org/about/staying-in-touch">Contact Us</a>
        <a href="https://www.themoviedb.org/talk">Support Forums</a>
        <a href="https://www.themoviedb.org/documentation/api">API</a>
        <a href="https://status.themoviedb.org/">System Status</a>
      </Links>
      <Links>
        <strong>Get Involved</strong>
        <a href="https://www.themoviedb.org/bible">Contribution Bible</a>
        <a href="https://www.themoviedb.org/movie/new">Add New Movie</a>
        <a href="https://www.themoviedb.org/talk">Add New TV Show</a>
      </Links>
      <Links>
        <strong>Community</strong>
        <a href="https://www.themoviedb.org/documentation/community/guidelines">Guidelines</a>
        <a href="https://www.themoviedb.org/discuss">Discussions</a>
        <a href="https://www.themoviedb.org/leaderboard">Leaderboard</a>
        <a href="https://twitter.com/themoviedb">Twitter</a>
      </Links>
      <Links>
        <strong>The basics</strong>
        <a href="https://www.themoviedb.org/about?language=pt-BR">About TMDB</a>
        <a href="https://www.themoviedb.org/about/staying-in-touch?language=pt-BR">Contact Us</a>
        <a href="https://www.themoviedb.org/talk?language=pt-BR">Support Forums</a>
        <a href="https://www.themoviedb.org/documentation/api?language=pt-BR">API</a>
        <a href="https://status.themoviedb.org/">System Status</a>
      </Links>
    </Container>
  );
}
