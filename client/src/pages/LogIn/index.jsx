import { Container, FormHeader, InputWrapper } from '../LogIn/style';
import { Footer } from '../../components/Footer';

export function LogIn() {
  return (
    <Container>
      <FormHeader>
        <h2>Login to your account</h2>
        <p>
          In order to use the editing and rating capabilities of TMDB, as well as get personal
          recommendations you will need to login to your account. If you do not have an account,
          registering for an account is free and simple. <a href="#">Click here</a> to get started.
        </p>
        <p>
          If you signed up but didn't get your verification email, <a href="#">click here</a> to
          have it resent.
        </p>
        <form>
          <InputWrapper>
            <label htmlFor="email">Username</label>
            <input id="email" name="email" type="email" required />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required />
          </InputWrapper>
          <div>
            <button>Login</button>
            <a href="#">Reset password</a>
          </div>
        </form>
      </FormHeader>
      <Footer />
    </Container>
  );
}
