// pages/_app.js
import '../globals.css';
import ThemeToggle from 'ThemeToggle';

function Toggle({ Component, pageProps }) {
  return (
    <>
      <ThemeToggle />
      <Component {...pageProps} />
    </>
  );
}

export default Toggle;
