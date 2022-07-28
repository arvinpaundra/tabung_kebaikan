import QRCode from 'qrcode.react';

const QRCodeMunfiq = (props) => {
  const { kode } = props;

  return <QRCode level="H" includeMargin value={`http://localhost:5000/admin/penarikan/${kode}`} />;
};

export default QRCodeMunfiq;
