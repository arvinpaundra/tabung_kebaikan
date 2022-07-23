import Head from "next/head";
import Container from "../../components/atoms/Container";
import MainContainer from "../../components/atoms/MainContainer";
import Sidebar from "../../components/organisms/Sidebar";

const Settings = (props) => {
  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>

      <MainContainer>
        <Sidebar active="Settings" />
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-darkBlue">Settings</h1>
            <div className="grid grid-cols-12 w-full">
              <div className="card bg-white w-full col-span-6">
                <div className="card-body">
                  <div className="flex flex-col gap-4">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-darkBlue font-semibold"
                        >
                          Nama Lengkap
                        </label>
                        <input type="text" name="name" id="name" className="rounded-full border-2 border-darkBlue px-4 py-3 w-1/2 outline-none" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="username"
                          className="text-darkBlue font-semibold"
                        >
                          Username
                        </label>
                        <input type="text" name="username" id="username" className="rounded-full border-2 border-darkBlue px-4 py-3 w-1/2 outline-none" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="text-darkBlue font-semibold"
                        >
                          No. Telepon
                        </label>
                        <input type="phone" name="phone" id="phone" className="rounded-full border-2 border-darkBlue px-4 py-3 w-1/2 outline-none" />
                      </div>

                      
                      <div className="mt-5">

                      <button className="bg-gsc rounded-full py-3 w-1/2 text-white">Save My Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </MainContainer>
    </>
  );
};

export default Settings;
