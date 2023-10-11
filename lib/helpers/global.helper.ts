export const toFormattedPercentage = (
  num: number | undefined,
  decimals: number | undefined
) => {
  try {
    if (num !== undefined && num !== null && !isNaN(num.valueOf())) {
      let formattedNumber = (num * 100).toFixed(decimals || 0);

      if (decimals !== undefined) {
        formattedNumber = parseFloat(formattedNumber).toString();
      }

      return `${formattedNumber}%`;
    } else {
      return "--";
    }
  } catch (error) {
    console.log("toFormattedPercentage failed : " + error);
  }
};

export const formatNumber = (
  num: number | undefined,
  decimals?: number
): string => {
  try {
    if (num !== undefined && num !== null && !isNaN(num)) {
      const isBigNumber = num > 999999;

      return new Intl.NumberFormat("en-US", {
        notation: isBigNumber ? "compact" : undefined,
        minimumFractionDigits: decimals || 0,
        maximumFractionDigits: decimals || 0,
      }).format(num);
    } else {
      return "0";
    }
  } catch (error) {
    throw new Error("securdFormat failed : " + error);
  }
};

export const getRelativeTime = (timestamp: number) => {
  const now = new Date().getTime();
  const diff = timestamp * 1000 - now;
  const units = {
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000,
  };

  if (diff < units.minute) {
    return "Unlocked";
  } else if (diff < units.hour) {
    return `${Math.floor(diff / units.minute)} minutes`;
  } else if (diff < units.day) {
    return `${Math.floor(diff / units.hour)} hours`;
  } else if (diff < units.month) {
    return `${Math.floor(diff / units.day)} days`;
  } else if (diff < units.year) {
    return `${Math.floor(diff / units.month)} months`;
  } else {
    return `${Math.floor(diff / units.year)} years`;
  }
};
