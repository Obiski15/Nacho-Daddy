function CheckoutSummaryRow({ name, children }) {
  return (
    <p className="mb-1 flex items-center justify-between gap-5">
      <span className="capitalize">{name}: </span>
      <em className="text-sm font-semibold italic">{children}</em>
    </p>
  );
}

export default CheckoutSummaryRow;
