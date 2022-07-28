const Badge = (props) => {
  return (
    <div className={`w-fit h-fit px-3 py-0.5 text-sm rounded-full text-white ${props.status}`}>
      {props.label}
    </div>
  );
};

export default Badge;
