import { Combobox } from '@headlessui/react';
import { useCallback, useEffect, useState } from 'react';
import { getAllKecamatan } from '../../../services/kecamatan';
import { SelectList } from '../../molecules/Combobox';

const KecamatanSelectList = (props) => {
  const { setIdKec, idKec, color_scheme } = props;

  const [kecamatan, setKecamatan] = useState([]);
  const [query, setQuery] = useState('');

  const getKecamatan = useCallback(async (search, limit, page) => {
    try {
      const response = await getAllKecamatan(search, limit, page);

      if (response.error) {
        throw new Error(response.message);
      }

      setKecamatan(response.data.result);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (query) {
      getKecamatan(query, 3, 0);
    }
  }, [getKecamatan, query]);

  return (
    <SelectList
      setSelected={setIdKec}
      selected={idKec}
      displayValue={(kecamatan) => kecamatan.nama_kec}
      setQuery={setQuery}
      placeholder="Pilih kecamatan"
      color_scheme={color_scheme}
    >
      {kecamatan.map((item) => (
        <Combobox.Option
          key={item.id_kec}
          className={({ active }) =>
            `relative z-10 cursor-pointer hover:bg-gsc/10 hover:text-gsc transition ease-in-out duration-200 select-none py-2 pl-10 pr-4 ${
              active ? 'bg-gsc/10 text-gsc' : 'text-black/90'
            }`
          }
          value={item}
        >
          {item.nama_kec}
        </Combobox.Option>
      ))}
    </SelectList>
  );
};

export default KecamatanSelectList;
