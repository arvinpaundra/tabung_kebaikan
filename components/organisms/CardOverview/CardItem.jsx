import Image from 'next/image';
import NumberFormat from 'react-number-format';

const CardItem = (props) => {
  const { desc1, desc2, desc3, value1, value2, type } = props;

  return (
    <div className="card bg-white drop-shadow-lg p-6 rounded-2xl">
      <div className="card-body">
        <div className="flex gap-4">
          <Image src="/icon.png" alt="" width={60} height={60} />
          <h2 className="card-title text-black/90">
            {desc1} <br />
            {desc2}
          </h2>
        </div>
        <div className="flex-col pt-4">
          <p className="text-sm">{desc3}</p>
          {!value2 && type === 'nominal' ? (
            <p className="font-medium text-xl text-black/90">
              <NumberFormat
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp. "
                displayType="text"
                type="text"
                value={value1}
              />
            </p>
          ) : (
            <p className="font-medium text-xl text-black/90">
              {value1 ?? 0} <span className="text-sm font-light">dari {value2} tabung</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
