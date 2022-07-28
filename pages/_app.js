import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        theme="colored"
        autoClose={3000}
        transition={Slide}
        position="top-center"
        className="w-96"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
