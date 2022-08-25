import { Container, WelcomeHeader, JoinHeader } from './style';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { CardGrid } from '../../components/CardGrid';

export function Home() {
  return (
    <Container>
      <WelcomeHeader>
        <h1>Welcome.</h1>
        <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      </WelcomeHeader>
      <CardGrid title="What's Popular">
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="1"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="60"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes=""
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
        <Card
          image="https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg"
          title="O Predador: A Caçada"
          votes="81"
          releaseDate="Aug 02, 2022"
        />
      </CardGrid>
      <JoinHeader>
        <div>
          <h1>Join Today</h1>
          <p>
            Get access to maintain your own <i>custom personal lists, track what you've seen</i> and
            search and filter for <i>what to watch</i> next—regardless if it's in theatres, on TV or
            available on popular streaming services like Netflix, Amazon Prime Video, and Zee5.
          </p>
          <button>Sign Up</button>
        </div>
        <ul>
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>Filter by your subscribed streaming services and find something to watch</li>
          <li>Log the movies and TV shows you've seen Build custom lists</li>
          <li>Contribute to and improve our database</li>
        </ul>
      </JoinHeader>
      <Footer />
    </Container>
  );
}
