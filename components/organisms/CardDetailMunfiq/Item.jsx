const Item = (props) => {
  const { label, value, date } = props;

  if (date) {
    const formattedDate = new Date(value);

    return (
      <div className="flex justify-between items-center text-black/90">
        <p>{label}</p>
        <p className="font-semibold">
          {formattedDate?.toLocaleDateString('in-IN', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          })}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center text-black/90">
      <p>{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default Item;
