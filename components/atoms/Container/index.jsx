const Container = (props) => {
  return (
    <section className="absolute top-0 left-[20%] flex flex-col gap-8 w-[80%] bg-soft-blue py-6 px-12">
      {props.children}
    </section>
  );
};

export default Container;
