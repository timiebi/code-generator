import { useState, useEffect } from 'react';

function getDeviceDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const smallDevice = width < 320;
  const normalDevice = width < 480;
  const tablets = width < 768;
  const largerThanTablets = width > 768;
  const smallDesktops = width < 1024;
  const desktop = width > 1024;
  return {
    smallDesktops,
    desktop,
    smallDevice,
    normalDevice,
    tablets,
    width,
    height,
    largerThanTablets
  };
}


export default function useDeviceDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getDeviceDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getDeviceDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowDimensions;
}