import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const QR = () => {
  const [showQR, setShowQR] = useState<boolean>(false);
  const [qrImage, setQRImage] = useState<string>('');

  const generateQR = async () => {
    // setQRImage(await QRCode.toDataURL(window.location.href))
    setQRImage(await QRCode.toDataURL('http://192.168.50.241:3000'));
  };

  useEffect(() => {
    generateQR();
  }, []);

  return (
    <div className='qr'>
      {showQR && qrImage && (
        <img className='qr_image' src={qrImage} alt='qrImage' />
      )}
      <button
        className='qr_button'
        type='button'
        onClick={() => setShowQR(!showQR)}
      >
        <img
          className='qr_button_icon'
          src='https://icon-library.com/images/qr-code-icon/qr-code-icon-24.jpg'
          alt='qrIcon'
        />
        {showQR ? 'Hide Profile QR' : 'Generate Profile QR Code'}
      </button>
    </div>
  );
};

export default QR;
