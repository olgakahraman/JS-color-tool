const isValidHex = (hex) => {
  if (!hex) return false;

  const srtippedHex = hex.replace("#", "");
  return srtippedHex.length === 3 || srtippedHex.length === 6;
};


