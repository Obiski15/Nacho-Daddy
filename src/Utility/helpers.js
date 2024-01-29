export function formatCurrency(value) {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return currency;
}

export function formatDate(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}

export function searchItem(items, query) {
  const result = items.filter((el) =>
    el.itemName.toLowerCase().includes(query),
  );

  return result;
}
