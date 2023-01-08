const MainContainer = (props) => {
  return <main className="flex bg-soft-blue relative w-full min-h-screen">{props.children}</main>;
};

export default MainContainer;

export const MobileContainer = (props) => {
  return <main className="max-w-md bg-soft-blue w-full min-h-screen pb-14">{props.children}</main>;
};
