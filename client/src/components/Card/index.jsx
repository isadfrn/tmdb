import {
  Container,
  Votes,
  TextArea,
  PositiveVote,
  NeutralVote,
  NegativeVote,
  NoVote,
} from './style';

export function Card({ title, image, votes, releaseDate }) {
  function votesRender(votesNumber) {
    if (Number(votesNumber) < 0 || !Number(votesNumber)) {
      return (
        <NoVote>
          0<span>%</span>
        </NoVote>
      );
    } else if (Number(votesNumber) > 80) {
      return (
        <PositiveVote>
          {votesNumber}
          <span>%</span>
        </PositiveVote>
      );
    } else if (Number(votesNumber) < 80 && Number(votesNumber) > 50) {
      return (
        <NeutralVote>
          {votesNumber}
          <span>%</span>
        </NeutralVote>
      );
    } else {
      return (
        <NegativeVote>
          {votesNumber}
          <span>%</span>
        </NegativeVote>
      );
    }
  }

  return (
    <Container>
      <img src={image} alt={title} />
      <Votes>{votesRender(votes)}</Votes>
      <TextArea>
        <strong>{title}</strong>
        <span>{releaseDate}</span>
      </TextArea>
    </Container>
  );
}
