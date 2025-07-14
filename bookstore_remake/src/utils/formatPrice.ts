
  const formatPrice = (amount: number, currency?: string) => {
    const currentDefault = currency ?? "VND"; // fallback to VND
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: currentDefault,
      maximumFractionDigits: currentDefault === "VND" ? 0 : 2,
    }).format(amount);
  };
export {
    formatPrice
}