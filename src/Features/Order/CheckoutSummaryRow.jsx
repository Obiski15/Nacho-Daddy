function CheckoutSummaryRow({ name, children }) {
  return (
    <div className="mb-1 flex items-center justify-between gap-5 overflow-hidden">
      <p className="capitalize">{name}: </p>
      <em className="text-sm font-semibold italic">{children}</em>
    </div>
  );
}

export default CheckoutSummaryRow;
