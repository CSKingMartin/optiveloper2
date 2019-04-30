/* _app.js | https://github.com/zeit/next.js/#custom-app */
import App, { Container } from 'next/app';
import Wrapper from '@atoms/Wrapper/Wrapper';
import '../bundle.css.jsx';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
      	<Wrapper>
	        <Component {...pageProps} />
	       </Wrapper>
      </Container>
    )
  }
}

export default MyApp