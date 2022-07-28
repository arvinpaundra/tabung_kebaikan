import Head from 'next/head';
import FormLogin from '../components/organisms/FormLogin';
import jwtDecode from 'jwt-decode';

const Login = (props) => {
  return (
    <>
      <Head>
        <title>Masuk</title>
      </Head>

      <main className="flex justify-center items-center bg-soft-blue w-full h-screen">
        <section className="bg-white rounded-lg drop-shadow-lg p-6 md:w-[50%] lg:w-[35%]">
          <h1 className="text-2xl font-semibold text-dark-blue">
            Masuk,
            <br />
          </h1>
          <p className="text-dark-blue mb-8">Awali segala sesuatu dengan Bismillah.</p>
          <FormLogin />
          <div className="w-full text-center mt-6">
            <a
              href="https://gsc.or.id"
              target="_blank"
              className="font-semibold text-sm text-smoke-grey hover:text-gsc transition ease-in-out duration-300"
              rel="noreferrer"
            >
              gsc.or.id
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  return {
    props: {},
  };
}
