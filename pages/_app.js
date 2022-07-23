import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer theme="colored" autoClose={3000} transition={Slide} position="top-center" />
    </>
  );
}

export default MyApp;
