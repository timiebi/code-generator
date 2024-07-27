// src/components/MobileWarning.tsx

import React from 'react';

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const MobileWarning: React.FC = () => {
  const isMobile = isMobileDevice();

  return (
    <>
      {!isMobile && (
        <div >
          Please use a mobile device for a better experience.
        </div>
      )}
    </>
  );
};


export default MobileWarning;
