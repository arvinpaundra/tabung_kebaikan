import { useCallback, useEffect, useState } from 'react';
import { getRekapPerbulan, getTotalSaldo } from '../../../services/rekap';
import CardItem from './CardItem';

const CardOverview = (props) => {
  const [saldo, setSaldo] = useState({});
  const [rekap, setRekap] = useState({});

  const rekapPerbulan = useCallback(async (month, year) => {
    try {
      const response = await getRekapPerbulan(month, year);

      setRekap(response.data);
    } catch (error) {}
  }, []);

  const totalSaldo = useCallback(async () => {
    try {
      const response = await getTotalSaldo();

      setSaldo(response.data);
    } catch (error) {}
  }, []);

  const date = new Date();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getFullYear();

  useEffect(() => {
    rekapPerbulan(month, year);
  }, [rekapPerbulan, month, year]);

  useEffect(() => {
    totalSaldo();
  }, [totalSaldo]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <CardItem
        type="penarikan"
        value1={rekap.penarikan}
        value2={rekap.total_tabung}
        desc1="Tabung Kebaikan"
        desc2="ditarik bulan ini"
        desc3="Penarikan bulan ini"
      />
      <CardItem
        type="nominal"
        value1={rekap.saldo}
        desc1="Total saldo"
        desc2="bulan ini"
        desc3="Saldo bulan ini"
      />
      <CardItem
        type="nominal"
        value1={saldo.total_saldo}
        desc1="Total saldo"
        desc2="keseluruhan"
        desc3="Saldo keseluruhan"
      />
    </div>
  );
};

export default CardOverview;
