import NumberFormat from 'react-number-format';

const Item = (props) => {
  const { nominal, label, value } = props;

  if (nominal) {
    return (
      <div className="flex justify-between items-center text-black/90">
        <p>{label}</p>
        <p className="font-semibold">
          <NumberFormat
            displayType="text"
            type="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="Rp. "
            value={value}
          />
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
