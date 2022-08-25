import { Container, Title, Grid } from './style';
export function CardGrid({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}
